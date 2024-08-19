import { Notifications } from "../../../../../Alerts/Notification";
import { VideoCallControlls } from "./Components/Controlls";
import { SharedScreen } from "./Components/shareScreen";
import { UsersCalls } from "./Components/UsersCalls";

import { useState } from "react";

export const CallInterface = () => {

  const [isSharingScreen, setIsSharingScreen] = useState(false)

  return (
    <div className="w-screen h-full p-2 overflow-y-hidden flex flex-col justify-evenly  text-white bg-overlay_1">
      
      <div className={`w-full h-3/5`}>
        <SharedScreen />
      </div>
      
      <div className="w-full h-1/6">
        <UsersCalls />
      </div>

      <VideoCallControlls />
    </div>
  );
};
