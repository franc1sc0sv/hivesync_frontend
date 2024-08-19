import { useSession } from "../../../../../../../store/user";
import useVideoStream from "../../../../../../../store/videoCall/useCameraStream";
import { UserAvatar } from "../../../../../../Avatars/UserAvatar";

import { UserCameraStream } from "./userCameraStream";

interface UserCardProps {
  username: string;
  userColor: string;
}
export const UserCard: React.FC<UserCardProps> = ({ username, userColor }) => {
  const { stream } = useVideoStream();

  return (
    <div
      className={` bg-primary w-full h-[50%] sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center mb-4 md:mb-0 relative `}
    >
      {stream ? (
        <UserCameraStream />
      ) : (
        <UserAvatar username="Lu_Krieg" profileURl="" />
      )}

      <p className="absolute pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 2t-1 bottom-1 pb- bg-overlay_2 opacity-90">
        {username}
      </p>
    </div>
  );
};

export const UserCardFriend: React.FC<UserCardProps> = ({
  username,
  userColor,
}) => {
  return (
    <div
      className={` bg-primary opacity-50  w-full h-[50%]  sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center mb-4 md:mb-0 relative `}
    >
      <UserAvatar profileURl="" username={username} />

      <p className="absolute pt-1 pb-1 pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 bottom-2 bg-overlay_2 opacity-90">
        {username}
      </p>
    </div>
  );
};

export const UsersCalls = ({}) => {
  const { user } = useSession();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:gap-3">
      <UserCardFriend username="Lu_krieg" userColor="" />

      <UserCard username={user?.username as string} userColor="" />
    </div>
  );
};
