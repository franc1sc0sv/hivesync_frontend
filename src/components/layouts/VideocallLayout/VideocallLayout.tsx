import { VideoCallControlls } from "./components/videocallControls";
import { UsersCalls } from "./components/usersCards";

export const VideoCallLayout = () => {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-full p-2 overflow-y-auto text-white bg-overlay_1">
      <UsersCalls />
      <VideoCallControlls />
    </div>
  );
};
