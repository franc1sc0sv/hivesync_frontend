import { Notifications } from "../../../../../Alerts/Notification";
import { VideoCallControlls } from "./Components/Controlls";
import { SharedScreen } from "./Components/shareScreen";
import { UsersCalls } from "./Components/UsersCalls";
import { useScreenShare } from "../../../../../../store/videoCall/useScreenShare";


export const CallInterface = () => {

  const { screenStream } = useScreenShare();

  return (
    <div className="w-screen h-full p-2 flex flex-col justify-between items-center text-white bg-overlay_1 overflow-y-auto">
      {/* Componente ultra importante, NO MOVER POR FAVOR */}
      {screenStream ? <Streaming /> : <NoStreaming />}

      <VideoCallControlls />
    </div>
  );
};

const Streaming: React.FC = () => {
  return (
    <div className="h-4/5 flex flex-col lg:flex-row justify-between md:justify-center items-center">
      <div className="w-full lg:w-3/5">
        <SharedScreen />
      </div>

      <div className="flex h-1/2 lg:h-4/5 md:h-2/5 md:flex-shrink lg:w-1/5">
        <UsersCalls />
      </div>
    </div>

  )
}

const NoStreaming: React.FC = () => {
  return (
    <div className="w-full h-4/5 flex justify-center items-center">
      <div className="w-full h-4/5 flex justify-center items-center overflow-y-auto">
        <UsersCalls />
      </div>
    </div>
  )
}



