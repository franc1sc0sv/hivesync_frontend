import React, { createContext, useState, useEffect, useRef } from "react";
import { useChat } from "../../ChatLayout/Context/useChat";

enum CallStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
}

interface CallContextType {
  callId: string | null;
  status: CallStatus;

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
  // Call essential properties
  const [callId, setCallId] = useState<string | null>(null);
  const [status, setStatus] = useState<CallStatus>(CallStatus.PENDING);

  // Media Streams
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  // Screen Streams
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [remoteScreenStream, setRemoteScreenStream] =
    useState<MediaStream | null>(null);

  // Video Elements
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const localScreenRef = useRef<HTMLVideoElement | null>(null);
  const remoteScreenRef = useRef<HTMLVideoElement | null>(null);

  // Control States
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isShareScreenActive, setIsShareScreenActive] = useState(false);

  // friend data
  const { friend } = useChat();

  const startCall = async () => {};

  const acceptCall = () => {};

  const endCall = () => {};

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
    if (mediaStream && localVideoRef.current) {
      localVideoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

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
