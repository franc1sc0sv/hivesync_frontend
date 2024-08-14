import { Link } from "react-router-dom";

import { GoBackTriangle } from "../../../../components/Icons/goBackTriangle";
import { PhoneIcon } from "../../../../components/Icons/phone";
import { WebCameraIcon } from "../../../../components/Icons/webCamera";
import { ButtonHover } from "../../../../components/buttons/hoverButton";

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

      <div className="flex flex-row items-end ">
        <ButtonHover direction="l">
        <PhoneIcon size={30} color="#fff" />
        </ButtonHover>
        
        
        
        <ButtonHover direction="r">
        <WebCameraIcon size={35} color="#fff" />
        </ButtonHover>
        
        
        
      </div>
    </div>
  );
};
