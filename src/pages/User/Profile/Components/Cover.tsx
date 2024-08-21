import { Link } from "react-router-dom";
import { HiCog } from "react-icons/hi";

// testing data
import { userData } from "../../mocks/userData";
import { UserAvatar } from "../../../../components/Avatars/UserAvatar";


export const ProfileCover: React.FC = () => {
  return (
    <div className="w-full mx-auto text-gray-900 rounded-lg lg:w-4/5">
      {/* cover  */}
      <div
        style={{ backgroundColor: userData.themeColor }}
        className={`relative overflow-hidden rounded-xl h-36`}
      >
        {/* settings icon */}
        <SettingsPageButton />
      </div>

      {/* icon */}
      <div className="relative ml-5 -mt-20 overflow-hidden w-28 h-28 rounded-2xl">
        <UserAvatar 
        username={userData.username} 
        profileURl=""
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
