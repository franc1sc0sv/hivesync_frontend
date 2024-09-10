import { useSession } from "../../../../store/user";

import { UserAvatar } from "../../../Avatars/UserAvatar";
import { useCall } from "../Context/useCall";

import { UserCameraStream } from "./userCameraStream";

const CurrentScreen = ({
  username,
  profileUrl,
  stream,
  videoRef,
}: {
  username: string;
  profileUrl: string;
  stream: MediaStream | null;
  videoRef: React.RefObject<HTMLVideoElement>;
}) => {
  if (stream) {
    return <UserCameraStream stream={stream} videoRef={videoRef} />;
  }

  return <UserAvatar username={username} profileURl={profileUrl} />;
};

const UserCard = () => {
  const { user } = useSession();
  const { mediaStream, localVideoRef } = useCall();
  return (
    <div
      style={{ backgroundColor: user?.backgroundUrl }}
      className={` w-full h-[50%] sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center  relative `}
    >
      <CurrentScreen
        videoRef={localVideoRef}
        profileUrl={user?.profileUrl as string}
        username={user?.username as string}
        stream={mediaStream}
      />
      <p className="absolute pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 2t-1 bottom-1 pb- bg-overlay_2 opacity-90">
        {user?.username}
      </p>
    </div>
  );
};

const UserCardFriend = () => {
  const { remoteStream, friend, remoteVideoRef, status } = useCall();

  const PENDING_STYLES = status === "PENDING" ? "opacity-50" : "";
  const PENDING_STYLES_BG = status === "PENDING" ? "" : friend.backgroundUrl;

  return (
    <div
      style={{ backgroundColor: PENDING_STYLES_BG }}
      className={`w-full h-[50%]  sm:h-[13.5rem] sm:w-[21rem] rounded-2xl flex items-center justify-center relative ${PENDING_STYLES}`}
    >
      <CurrentScreen
        videoRef={remoteVideoRef}
        profileUrl={friend.profileUrl}
        username={friend.username}
        stream={remoteStream}
      />

      <p className="absolute pt-1 pb-1 pl-2 pr-2 mb-2 ml-2 text-white rounded-md left-2 bottom-2 bg-overlay_2 opacity-90">
        {friend.username}
      </p>
    </div>
  );
};

export const UsersCalls = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 md:flex-row">
      <UserCardFriend />
      <UserCard />
    </div>
  );
};
