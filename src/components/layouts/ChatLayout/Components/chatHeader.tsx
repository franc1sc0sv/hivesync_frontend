import { Link } from "react-router-dom";

import { GoBackTriangle } from "../../../Icons/goBackTriangle";
import { PhoneIcon } from "../../../Icons/phone";
import { WebCameraIcon } from "../../../Icons/webCamera";
import { ButtonHover } from "../../../buttons/hoverButton";

import useFakePages from "../../../../store/useFakePage";
import useVerifyCallType from "../../../../store/chat/useVerifyCall";
import { VideoCallLayout } from "../../VideocallLayout/VideocallLayout";

interface ChatHeaderProps {
  username: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ username }) => {
  const { addFakePage } = useFakePages();
  const {setIsVoiceCall} = useVerifyCallType();

  const handleVoiceCall = () => {
    setIsVoiceCall(true);
    addFakePage({
      title: "Llamada de voz",
      children: <VideoCallLayout />,
    });
  };

  const handleVideoCall = () => {
    setIsVoiceCall(false);
    addFakePage({
      title: "Videollamada",
      children: <VideoCallLayout />,
    });
  };

  return (
    <div className="w-full h-[10%] flex items-center justify-between p-5">
      <div className="flex flex-row gap-5">
        <Link to="/app/@me">
          <GoBackTriangle size={30} color="#fff" />
        </Link>

        <p className="text-2xl font-amiko text-custom_white">{username}</p>
      </div>

      <div className="flex flex-row items-end ">
        <ButtonHover handleClick={handleVoiceCall} direction="r">
          <PhoneIcon size={30} color="#fff" />
        </ButtonHover>

        <ButtonHover handleClick={handleVideoCall} direction="l">
          <WebCameraIcon size={35} color="#fff" />
        </ButtonHover>
      </div>
    </div>
  );
};
