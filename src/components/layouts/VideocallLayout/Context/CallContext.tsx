import React, { createContext, useState, useEffect, useRef } from "react";
import Peer, { MediaConnection } from "peerjs";
import { useSession } from "../../../../store/user";
import { useChat } from "../../ChatLayout/Context/useChat";
import { useSocketContext } from "../../../../context/useSocket";
import { useFetchID } from "../../../../hooks/useFecthID";
import { accept_call, get_call_data } from "../../../../api/calls";
import { LoadingPage } from "../../../routes/loadingPage";

enum CallStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
}

type Call = {
  id: string;
  roomId: string;
  status: CallStatus;
  startedAt: Date;
  participants: string[];
} | null;

interface CallContextType {
  callId: string | null;
  status: Call;

  mediaStream: MediaStream | null;
  remoteStream: MediaStream | null;

  screenStream: MediaStream | null;
  remoteScreenStream: MediaStream | null;

  startCall: (roomId: string) => void;
  acceptCall: () => void;
  endCall: () => void;

  toggleAudio: () => void;
  toggleVideo: () => void;
  startScreenShare: () => Promise<void>;
  stopScreenShare: () => void;

  localVideoRef: React.RefObject<HTMLVideoElement>;
  remoteVideoRef: React.RefObject<HTMLVideoElement>;
  localScreenRef: React.RefObject<HTMLVideoElement>;
  remoteScreenRef: React.RefObject<HTMLVideoElement>;

  isMicrophoneActive: boolean;
  isCameraActive: boolean;
  isShareScreenActive: boolean;

  friend: UserInfoChat;
}

export const CallContext = createContext<CallContextType | undefined>(
  undefined
);

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [callId, setCallId] = useState<string | null>(null);
  const [status, setStatus] = useState<Call>(null);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [remoteScreenStream, setRemoteScreenStream] =
    useState<MediaStream | null>(null);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(true);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isShareScreenActive, setIsShareScreenActive] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const localScreenRef = useRef<HTMLVideoElement | null>(null);
  const remoteScreenRef = useRef<HTMLVideoElement | null>(null);

  const [peer, setPeer] = useState<Peer | null>(null);
  const { friend } = useChat();
  const { user } = useSession();

  const user_id = user?.id as string;

  const { socket } = useSocketContext();

  const { fecthData, isLoading } = useFetchID({ api_function: get_call_data });
  const { fecthData: updateCall, isLoading: isLoadingCall } = useFetchID({
    api_function: accept_call,
  });

  const url = import.meta.env.VITE_PEER;

  const accept_call_update = () => {
    const updater = async () => {
      const id_room = get_id();
      const data = await updateCall(id_room);
      setCallId(data);
    };

    updater();
  };

  const initial_logic = () => {
    if (!callId) return;

    if (callId && callId !== user_id && status?.status === CallStatus.PENDING) {
      acceptCall();
      return;
    }

    startCall(callId);
  };

  useEffect(() => {
    const initMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: isCameraActive,
          audio: isMicrophoneActive,
        });
        setMediaStream(stream);
      } catch (err) {
        console.error("Error al acceder a la cámara/micrófono:", err);
      }
    };

    initMediaStream();
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      const id_room = get_id();
      const data = await fecthData(id_room);
      setStatus(data);
      setCallId(id_room);
    };
    fetcher();
  }, [socket]);

  useEffect(initial_logic, [callId, user_id, mediaStream]);

  useEffect(() => {
    const peerInstance = new Peer(user_id, {
      host: url,
      port: 9001,
      path: "/peerjs/myapp",
    });

    peerInstance.on("open", (id) => {
      console.log("Peer ID:", id);
    });

    setPeer(peerInstance);

    peerInstance.on("call", (incomingCall: MediaConnection) => {
      if (status?.status === CallStatus.PENDING) {
        setCallId(incomingCall.peer);
      }

      if (status?.status === CallStatus.IN_PROGRESS && mediaStream) {
        incomingCall.answer(mediaStream);
        incomingCall.on("stream", (remoteStream) => {
          setRemoteStream(remoteStream);
        });
      }
    });

    //   if (status?.status === CallStatus.PENDING) {
    //     setCallId(call.peer);
    //   } else {
    //     accept_call_update();
    //     navigator.mediaDevices
    //       .getUserMedia({ video: isCameraActive, audio: isMicrophoneActive })
    //       .then((stream) => {
    //         setMediaStream(stream);
    //         call.answer(stream);
    //         call.on("stream", (remoteStream) => {
    //           setRemoteStream(remoteStream);
    //         });
    //       });
    //   }
    // });

    // // Listen for new peer connections and disconnections
    // if (socket) {
    //   socket.on("new_peer", ({ userId, peerId }) => {
    //     if (userId !== user_id) {
    //       // Optionally handle new peer connections here
    //     }
    //   });

    //   socket.on("peer_left", (userId) => {
    //     if (userId !== user_id) {
    //       // Optionally handle peer disconnections here
    //     }
    //   });
    // }
  }, [status, user_id, socket]);

  const startCall = async (roomId: string) => {
    if (peer && mediaStream) {
      const peerId = peer.id;
      const call = peer.call(roomId, mediaStream);

      if (call) {
        call.on("stream", (remoteStream) => {
          setRemoteStream(remoteStream);
        });
      }

      socket?.emit(
        "joinCall",
        { roomId, userId: user_id, peerId },
        (response: any) => {
          console.log("Respuesta del servidor:", response);
        }
      );
    }
  };

  const acceptCall = () => {
    if (peer && callId) {
      navigator.mediaDevices
        .getUserMedia({ video: isCameraActive, audio: isMicrophoneActive })
        .then((stream) => {
          setMediaStream(stream);
          const call = peer.call(callId, stream);
          call.on("stream", (remoteStream) => {
            setRemoteStream(remoteStream);
          });
          accept_call_update();

          socket?.emit("joinCall", {
            roomId: callId,
            userId: user_id,
            peerId: peer?.id,
          });
        });
    }
  };

  const endCall = () => {
    if (peer && mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
      setRemoteStream(null);
      setStatus(null);

      if (socket && callId) {
        socket.emit("leaveCall", { roomId: callId, userId: user_id });
      }
    }
  };

  const toggleAudio = () => {
    if (mediaStream) {
      const audioTrack = mediaStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicrophoneActive(audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (mediaStream) {
      const videoTrack = mediaStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCameraActive(videoTrack.enabled);
      }
    }
  };

  const startScreenShare = async () => {
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      setScreenStream(displayStream);
      setIsShareScreenActive(true);

      displayStream.getTracks().forEach((track) => {
        track.onended = () => {
          setScreenStream(null);
          setIsShareScreenActive(false);
        };
      });
    } catch (err) {
      console.error("Error al intentar compartir la pantalla:", err);
      setScreenStream(null);
      setIsShareScreenActive(false);
    }
  };

  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
    }
    setScreenStream(null);
    setIsShareScreenActive(false);
  };

  useEffect(() => {
    if (remoteStream && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  useEffect(() => {
    if (screenStream && localScreenRef.current) {
      localScreenRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  useEffect(() => {
    if (remoteScreenStream && remoteScreenRef.current) {
      remoteScreenRef.current.srcObject = remoteScreenStream;
    }
  }, [remoteScreenStream]);

  if (isLoading || isLoadingCall) return <LoadingPage />;

  const value = {
    callId,
    status,
    mediaStream,
    remoteStream,
    screenStream,
    remoteScreenStream,
    startCall,
    acceptCall,
    endCall,
    toggleAudio,
    toggleVideo,
    startScreenShare,
    stopScreenShare,
    localVideoRef,
    remoteVideoRef,
    localScreenRef,
    remoteScreenRef,
    isMicrophoneActive,
    isCameraActive,
    isShareScreenActive,
    friend,
  };

  return <CallContext.Provider value={value}>{children}</CallContext.Provider>;
};

const get_id = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const extractedId = urlParts[urlParts.length - 1];

  return extractedId;
};
