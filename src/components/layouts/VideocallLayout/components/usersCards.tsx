import { useSession } from "../../../../store/user";
import useVideoStream from "../../../../store/videoCall/useCameraStream";
import { useScreenShare } from "../../../../store/videoCall/useScreenShare";

import { UserAvatar } from "../../../Avatars/UserAvatar";
import { SharedScreen } from "./shareScreen";
import { UserCameraStream } from "./userCameraStream";

interface UserCardProps {
  username: string;
  userColor: string;
}

const CurrentScreen = () => {
  const { stream } = useVideoStream();
  const { screenStream } = useScreenShare();
  const { user } = useSession();

  if (stream) {
    return <UserCameraStream />;
  }

  if (screenStream) {
    return <SharedScreen />;
  }

  return (
    <UserAvatar
      username={user?.username as string}
      profileURl={user?.profileUrl as string}
    />
  );
};

const UserCard = () => {
  const { user } = useSession();

  return (
    <div
      style={{ backgroundColor: user?.backgroundUrl }}
      className={` w-full h-[50%] sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center  relative `}
    >
      <CurrentScreen />
      <p className="absolute pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 2t-1 bottom-1 pb- bg-overlay_2 opacity-90">
        {user?.username}
      </p>
    </div>
  );
};

const UserCardFriend: React.FC<UserCardProps> = ({ username, userColor }) => {
  return (
    <div
      style={{ backgroundColor: userColor }}
      className={`  opacity-50  w-full h-[50%]  sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center relative `}
    >
      <UserAvatar profileURl="" username={username} />

      <p className="absolute pt-1 pb-1 pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 bottom-2 bg-overlay_2 opacity-90">
        {username}
      </p>
    </div>
  );
};

export const UsersCalls = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:gap-3">
      <UserCard />
      <UserCardFriend username="Lu_krieg" userColor="" />
    </div>
  );
};
