import { Link } from "react-router-dom";
import { HiCog } from "react-icons/hi";

import { UserAvatar } from "../../../../components/Avatars/UserAvatar";
import { useSession } from "../../../../store/user";

export const ProfileCover: React.FC = ({
  show_config = true,
}: {
  show_config?: boolean;
}) => {
  const { user } = useSession();
  return (
    <div className="w-full mx-auto text-gray-900 rounded-lg lg:w-[90%]">
      <div
        style={{ backgroundColor: user?.backgroundUrl }}
        className={`relative overflow-hidden rounded-xl h-36`}
      >
        {show_config && <SettingsPageButton />}
      </div>

      <div className="relative ml-5 -mt-20 overflow-hidden w-28 h-28 rounded-2xl">
        <UserAvatar
          username={user?.username as string}
          profileURl={user?.profileUrl as string}
        />
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
