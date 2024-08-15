import { Link } from "react-router-dom";

import { GoBackTriangle } from "../../../../components/Icons/goBackTriangle";
import { PhoneIcon } from "../../../../components/Icons/phone";
import { WebCameraIcon } from "../../../../components/Icons/webCamera";
import { ButtonHover } from "../../../../components/buttons/hoverButton";
import useFakePages from "../../../../store/useFakePage";
import { VideoCallComponent } from "../../VideoCalls/VideoCallsIndex";

interface ChatHeaderProps {
  username: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ username }) => {
  const { addFakePage } = useFakePages();

  const handleVoiceCall = () => {
    addFakePage({
      title: "Llamada activa",
      children: <VideoCallComponent isVoiceCall />,
    });
  };

  const handleVideoCall = () => {
    addFakePage({
      title: "Llamada activa",
      children: <VideoCallComponent isVoiceCall={false} />,
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
