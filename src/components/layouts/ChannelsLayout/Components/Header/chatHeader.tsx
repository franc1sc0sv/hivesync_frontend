import { Link } from "react-router-dom";

import { GoBackTriangle } from "../../../../Icons/goBackTriangle";
import { PhoneIcon } from "../../../../Icons/phone";
import { WebCameraIcon } from "../../../../Icons/webCamera";
import { ButtonHover } from "../../../../buttons/hoverButton";

import useFakePages from "../../../../../store/useFakePage";
import useVerifyCallType from "../../../../../store/chat/useVerifyCall";
import { VideoCallLayout } from "../../../VideocallLayout/VideocallLayout";
import { useChat } from "../../../ChatLayout/Context/useChat";
import { UserAvatar } from "../../../../Avatars/UserAvatar";

export const ChatHeader = () => {
  const { addFakePage } = useFakePages();
  const { setIsVoiceCall } = useVerifyCallType();

  const { friend } = useChat();

  const StartCall = () => {
    addFakePage({
      title: "Llamada",
      children: <VideoCallLayout />,
    });
  };

  const handleVoiceCall = () => {
    setIsVoiceCall(true);
    StartCall();
  };

  const handleVideoCall = () => {
    setIsVoiceCall(false);
    StartCall();
  };

  return (
    <div className="flexitems-center justify-between w-full px-5 py-3">
      <div className="flex items-center gap-5">
        <Link to="/app/@me">
          <GoBackTriangle size={24} color="#fff" />
        </Link>
        <div className="flex items-center gap-2">
          <UserAvatar
            w={2.5}
            h={2.5}
            fontSize={1.5}
            profileURl={friend?.profileUrl}
            username={friend?.username}
          />

          <p className="text-xl font-amiko text-custom_white">
            {friend.username}
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <ButtonHover handleClick={handleVoiceCall}>
          <PhoneIcon size={24} color="#fff" />
        </ButtonHover>

        <ButtonHover handleClick={handleVideoCall}>
          <WebCameraIcon size={24} color="#fff" />
        </ButtonHover>
      </div>
    </div>
  );
};
