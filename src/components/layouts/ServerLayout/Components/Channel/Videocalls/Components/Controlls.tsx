//icons
import { FiCamera } from "react-icons/fi";
import { MdCallEnd } from "react-icons/md";
import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";
import { MdCoPresent } from "react-icons/md";
import { FiCameraOff } from "react-icons/fi";

import { ButtonCallsProps } from "../types";
import { ButtonCalls } from "./Button";
import { BUTTON_TYPE } from "../enums";

import { useState } from "react";

//custom hooks
import { useNotifications } from "../../../../../../../store/useNotifications";
import useFakePages from "../../../../../../../store/useFakePage";
import useVideoStream from "../../../../../../../store/videoCall/useCameraStream";
import { useScreenShare } from "../../../../../../../store/videoCall/useScreenShare";

export const VideoCallControlls: React.FC = () => {
  const { setStream, clearStream, stream } = useVideoStream();
  const { setNotifications } = useNotifications();
  const { removeFakePage, fakePages } = useFakePages();
  const {screenSretam, startScreenShare, stopScreenShare} = useScreenShare();

  const [hasCamera, setHasCamera] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false)

  const handleToggleCamera = async () => {
    if (!isCameraActive) {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(videoStream);
        setIsCameraActive(true);
        setHasCamera(true);
      } catch (err) {
        console.error('Error al acceder a la cámara: ', err);
        setHasCamera(false);
      }
    } else {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Detener todas las pistas de video
        clearStream(); 
      }
      setIsCameraActive(false);
    }
  };

  const toggleScreenShare = () => {
    if (screenSretam) {
      stopScreenShare()
    } else {
      startScreenShare()
    }
  }

  const toggleMicrophone = async () => {
    if (!isMicrophoneActive) {
      setIsMicrophoneActive(true)
    } else {
      setIsMicrophoneActive(false)
    }
  }

  const lastPageId = fakePages.length > 0 ? fakePages[fakePages.length - 1].id : null;

  const controlls: ButtonCallsProps[] = [
    {
      Icon: isMicrophoneActive ? PiMicrophoneFill : PiMicrophoneSlashFill,
      onClick: toggleMicrophone,
      type: BUTTON_TYPE.MICROPHONE,
    },
    {
      Icon: isCameraActive ? FiCamera : FiCameraOff,
      onClick: handleToggleCamera,
      type: BUTTON_TYPE.CAMERA,
    },
    {
      Icon: MdCoPresent,
      onClick: toggleScreenShare,
      type: BUTTON_TYPE.PRESENTATION,
    },
    {
      Icon: MdCallEnd,
      onClick: async () => {
        if (lastPageId !== null) {
          removeFakePage(lastPageId);
        }
        setNotifications({
          severity: "info",
          message: "Llamada finalizada"
        });
        stopScreenShare();
        clearStream();
      },
      type: BUTTON_TYPE.HANG_UP,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-20 gap-3 bg-opacity-50 rounded-2xl bg-overlay_2">
      {controlls.map((controll, i) => (
        <ButtonCalls
          key={i}
          Icon={controll.Icon}
          onClick={controll.onClick}
          type={controll.type}
        />
      ))}
    </div>
  );
};
