import React, { createContext, useState, useEffect, useRef } from "react";
import Peer, { MediaConnection } from "peerjs";
import { useSession } from "../../../../store/user";
import { useChat } from "../../ChatLayout/Context/useChat";
import { useSocketContext } from "../../../../context/useSocket";
import { useFetchID } from "../../../../hooks/useFecthID";
import { get_call_data } from "../../../../api/calls";
import { LoadingPage } from "../../../routes/loadingPage";
import { useAudioDetection } from "../../../../hooks/useAudioDetection";

enum CallStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
}

type Call = {
  id: string;
  roomId: string;
  status: CallStatus;
  startedAt: Date;
  participants: participant[];
} | null;

type participant = {
  id: string;
  userId: string;
  callId: String;
  joinedAt: Date;
};

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
  isTalking: boolean;
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
  const [remoteScreenStream, _] = useState<MediaStream | null>(null);

  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
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

  const [isTalking, setIsTalking] = useState(false);
  const isUserTalking = useAudioDetection(mediaStream);

  const url = import.meta.env.VITE_PEER;

  const initial_logic = () => {
    if (!callId) return;

    if (
      status?.status === CallStatus.PENDING &&
      status.participants[0].userId !== user_id
    ) {
      acceptCall();
      return;
    }

    startCall();
  };

  useEffect(() => {
    if (isUserTalking) {
      setIsTalking(true);
    } else {
      setIsTalking(false);
    }
  }, [isUserTalking]);

  useEffect(() => {
    const initMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setMediaStream(stream);
      } catch (err) {
        console.error("Error accessing camera/microphone:", err);
      }
    };

    initMediaStream();
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      const id_friendship = friend.id_friendship;
      const data = await fecthData(id_friendship);
      setStatus(data);
      setCallId(id_friendship);
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
      setPeer(peerInstance);
    });

    peerInstance.on("call", (incomingCall: MediaConnection) => {
      console.log("answer");
      if (status?.status === CallStatus.IN_PROGRESS && mediaStream) {
        incomingCall.answer(mediaStream);
        incomingCall.on("stream", (remoteStream) => {
          setRemoteStream(remoteStream);
        });
      }
    });

    if (socket) {
      socket.on("new_peer", ({ call }) => {
        setStatus(call);
      });

      socket.on("peer_left", ({ call }) => {
        setStatus(call);
      });
    }
  }, [status, user_id, socket]);

  const startCall = async () => {
    if (!peer || !mediaStream || !callId) return;

    const peerId = peer.id;
    const call = peer.call(callId, mediaStream);

    call?.on("stream", (remoteStream) => {
      console.log("started2");
      setRemoteStream(remoteStream);
    });

    socket?.emit(
      "joinCall",
      { roomId: callId, userId: user_id, peerId, source: "CREATE" },
      (response: any) => {
        setStatus(response.call);
      }
    );
  };

  const acceptCall = () => {
    if (!peer || !mediaStream || !callId) return;

    const incomingCall = peer?.call(callId, mediaStream);

    incomingCall?.on("stream", (remoteStream) => {
      setRemoteStream(remoteStream);
    });

    socket?.emit(
      "joinCall",
      {
        roomId: callId,
        userId: user_id,
        peerId: peer?.id,
        source: "ANSWER",
      },
      (response: any) => {
        setStatus(response.call);
      }
    );
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
      const audioTracks = mediaStream.getAudioTracks();
      if (audioTracks.length > 0) {
        const audioTrack = audioTracks[0];
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicrophoneActive(audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (mediaStream) {
      const videoTracks = mediaStream.getVideoTracks();
      if (videoTracks.length > 0) {
        const videoTrack = videoTracks[0];
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
    if (mediaStream && localVideoRef.current) {
      const videoTracks = mediaStream.getVideoTracks();

      if (videoTracks.length > 0) {
        localVideoRef.current.srcObject = new MediaStream([videoTracks[0]]);
      }
    }
  }, [mediaStream, isCameraActive]);

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

  if (isLoading) return <LoadingPage />;

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
    isTalking,
  };

  return <CallContext.Provider value={value}>{children}</CallContext.Provider>;
};
