import { useSession } from "../../../../store/user";
import useVideoStream from "../../../../store/videoCall/useCameraStream";

import { UserAvatar } from "../../../../components/Avatars/UserAvatar";
import { UserCameraStream } from "./userCameraStream";
import { useScreenShare } from "../../../../store/videoCall/useScreenShare";


interface UserCardProps {
  username: string;
  userColor: string;
}
const UserCard: React.FC<UserCardProps> = ({ username, userColor }) => {

  const {stream} = useVideoStream();
  const { screenStream} = useScreenShare();

  return (
    <div
      className={`${screenStream ? "w-1/2" : "w-full sm:w-[21rem]"
        } bg-primary opacity-50 h-[50%] rounded-2xl flex items-center justify-center mb-4 md:mb-0 relative min-[580px]:p-3`}
    >
      {stream ? (
        <UserCameraStream />
      ) : (
        <UserAvatar username="Lu_Krieg" profileURl="" />
      )}

      <p className="absolute pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 2t-1 bottom-1 pb- bg-overlay_2 opacity-90 min-[580px]:p-3 max-[600px]:p-0">
        {username}
      </p>
    </div>
  );
};

const UserCardFriend: React.FC<UserCardProps> = ({
  username,
  userColor,
}) => {

  const { screenStream} = useScreenShare();

  return (
    <div
      className={`${screenStream ? "w-1/2" : "w-full sm:w-[21rem]"
        } bg-primary opacity-50 h-[50%] rounded-2xl flex items-center justify-center mb-4 md:mb-0 relative min-[580px]:p-3 max-[600px]:p-0`}
    >
      <UserAvatar profileURl="" username={username} />

      <p className="absolute pt-1 pb-1 pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 bottom-2 bg-overlay_2 opacity-90">
        {username}
      </p>
    </div>
  );
};


const IsNotSHaringScreen = ({ }) => {
  const { user } = useSession();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:gap-5">
      <UserCardFriend username="Lu_krieg" userColor="" />
      <UserCard username={user?.username as string} userColor="" />
    </div>
  );
};

const IsSharingScreen: React.FC = ({ }) => {
  const { user } = useSession();

  return (
    <div className="w-4/5 h-full mx-auto flex flex-shrink flex-row min-[580px]:flex-col sm:w-full items-center justify-center gap-3">
      <UserCardFriend username="Lu_krieg" userColor="" />
      <UserCard username={user?.username as string} userColor="" />
    </div>
  );
};

export const UsersCalls: React.FC = () => {

  const {screenStream} = useScreenShare();

  return (
    <>
      {screenStream ? <IsSharingScreen /> : <IsNotSHaringScreen />}
    </>
  )
}