//icons
import { FiCamera } from "react-icons/fi";
import { MdCallEnd } from "react-icons/md";
import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";
import { MdCoPresent } from "react-icons/md";
import { FiCameraOff } from "react-icons/fi";
import { FaUsersSlash } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { Notifications } from "../../../../components/Alerts/Notification";

import { ButtonCallsProps } from "../ButtonCallProps";
import { ButtonCalls } from "./button";
import { BUTTON_TYPE } from "../enum";

import { useState } from "react";

//custom hooks
import { useNotifications } from "../../../../store/useNotifications";
import useFakePages from "../../../../store/useFakePage";
import useVideoStream from "../../../../store/videoCall/useCameraStream";
import useVerifyCallType from "../../../../store/chat/useVerifyCall";
import useMicrophoneStore from "../../../../store/videoCall/useMicrophoneVideocalls";
import { useScreenShare } from "../../../../store/videoCall/useScreenShare";
import useDisplayMembers from "../../../../store/videoCall/useDisplayMembers";

export const VideoCallControlls: React.FC = () => {
  const { setStream, clearStream, stream } = useVideoStream();
  const { setNotifications } = useNotifications();
  const { removeFakePage, fakePages } = useFakePages();
  const { screenStream, startScreenShare, stopScreenShare } = useScreenShare();
  const { displayMembers, setDisplayMembers } = useDisplayMembers();
  const { isVoiceCall } = useVerifyCallType();
  const { isMicrophoneActive, toggleMicrophone } = useMicrophoneStore();

  const [hasCamera, setHasCamera] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);

  const handleToggleCamera = async () => {
    if (isVoiceCall) {
      setNotifications({
        message: "No puedes acceder a la cámara en una llamada de voz",
        severity: "warning",
      });
      return;
    }

    if (!isCameraActive) {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(videoStream);
        setIsCameraActive(true);
        setHasCamera(true);
      } catch (err) {
        console.error('Error al acceder a la cámara: ', err);
        setHasCamera(false);
        setNotifications({
          message: "Hubo un error al acceder a la cámara, revisa los permisos",
          severity: "error",
        });
      }
    } else {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // Detener todas las pistas de video
        clearStream();
      }
      setIsCameraActive(false);
    }
  };

  const toggleScreenShare = () => {
    if (isVoiceCall) {
      setNotifications({
        message: "No puedes compartir pantalla en una llamada de voz",
        severity: "warning",
      });
      return;
    }

    if (screenStream) {
      stopScreenShare();
    } else {
      startScreenShare();
    }
  };

  const handleToggleMicrophone = async () => {
    // Alterna el estado del micrófono utilizando el estado global de Zustand
    await toggleMicrophone();
  };

  const lastPageId = fakePages.length > 0 ? fakePages[fakePages.length - 1].id : null;

  const controlls: ButtonCallsProps[] = [
    {
      Icon: isMicrophoneActive ? PiMicrophoneFill : PiMicrophoneSlashFill,
      onClick: handleToggleMicrophone,
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
      Icon: displayMembers ? FaUsersSlash : FaUsers,
      onClick: () => {

        if (!screenStream) {
          setNotifications({
            severity: "warning",
            message: "Los miembros pueden ocultarse solo al transmitir pantalla"
          })
          return;
        }

        if (displayMembers) {
          setDisplayMembers(false);
          setNotifications({
            severity: "info",
            message: "Has ocultado los miembros de la llamada"
          })
        } else {
          setDisplayMembers(true);
          setNotifications({
            severity: "info",
            message: "Has desocultado los miembros de la llamada"
          })
        }
      },
      type: BUTTON_TYPE.PRESENTATION,
    },
    {
      Icon: MdCallEnd,
      onClick: () => {
        if (lastPageId !== null) {
          removeFakePage(lastPageId);
        }
        setNotifications({
          severity: "info",
          message: "Llamada finalizada",
        });
        stopScreenShare();
        clearStream();
      },
      type: BUTTON_TYPE.HANG_UP,
    },
  ];

  return (
    <div className="z-10 flex items-center justify-center w-full h-20 gap-3 rounded-2xl bg-overlay_2">
      {controlls.map((controll, i) => (
        <ButtonCalls
          key={i}
          Icon={controll.Icon}
          onClick={controll.onClick}
          type={controll.type}
        />
      ))}
      <Notifications />
    </div>
  );
};
