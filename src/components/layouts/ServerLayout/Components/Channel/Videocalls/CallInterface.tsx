import { Notifications } from "../../../../../Alerts/Notification";
import { VideoCallControlls } from "./Components/Controlls";
import { UsersCalls } from "./Components/UsersCalls";

export const CallInterface = () => {
  return (
    <div className="flex flex-col justify-between w-screen h-full p-4 text-white bg-overlay_1">
      <UsersCalls />
      <VideoCallControlls />
    </div>
  );
};
