import { Link } from "react-router-dom";
import { HiCog } from "react-icons/hi";

import { UserAvatar } from "../../../../components/Avatars/UserAvatar";

import { useEffect } from "react";

export const ProfileCover = ({
  show_config = true,
  profileUrl,
  username,
  backgroundUrl,
}: {
  profileUrl: string;
  username: string;
  backgroundUrl: string;
  show_config?: boolean;
}) => {

  // solución ultra sofisticada para arreglar bug del color de la portada xd
  useEffect(() => {
    if (!backgroundUrl) return window.location.reload();
  },[])

  return (
    <div className="w-full mx-auto text-gray-900 rounded-lg lg:w-[90%]">
      <div
        style={{ backgroundColor: backgroundUrl }}
        className={`relative overflow-hidden rounded-xl h-36`}
      >
        {show_config && <SettingsPageButton />}
      </div>

      <div className="relative ml-5 -mt-20 overflow-hidden w-28 h-28 rounded-2xl">
        <UserAvatar username={username} profileURl={profileUrl} />
      </div>
    </div>
  );
};

const SettingsPageButton: React.FC = () => {
  return (
    <Link to={`settings`} className="absolute top-0 right-0 p-3">
      <HiCog className="text-4xl text-custom_white" />
    </Link>
  );
};
