import { VideoCallControlls } from "./components/videocallControls";
import { UsersCalls } from "./components/usersCards";
import { CallProvider } from "./Context/CallContext";

export const VideoCallLayout = () => {
  return (
    <CallProvider>
      <div className="flex flex-col items-center justify-between w-screen h-full gap-10 p-5 overflow-y-auto text-white bg-overlay_1 ">
        <UsersCalls />
        <VideoCallControlls />
      </div>
    </CallProvider>
  );
};
