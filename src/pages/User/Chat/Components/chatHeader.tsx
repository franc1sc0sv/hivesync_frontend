import { Link } from "react-router-dom";

import { GoBackTriangle } from "../../../../components/Icons/goBackTriangle";
import { PhoneIcon } from "../../../../components/Icons/phone";
import { WebCameraIcon } from "../../../../components/Icons/webCamera";

interface ChatHeaderProps {
  username: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ username }) => {
  return (
    <div className="w-full h-[10%] flex items-center justify-between p-5">

      <div className="flex flex-row gap-5">
        <Link to="/app/@me">
          <GoBackTriangle size={30} color="#fff" />
        </Link>

        <p className="font-amiko text-2xl text-custom_white">{username}</p>
      </div>

      <div className="flex flex-row gap-5">
        <PhoneIcon size={30} color="#fff" />
        <WebCameraIcon size={35} color="#fff" />
      </div>
    </div>
  );
};
