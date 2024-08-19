import { Notifications } from "../../../../../Alerts/Notification";
import { VideoCallControlls } from "./Components/Controlls";
import { SharedScreen } from "./Components/shareScreen";
import { UsersCalls } from "./Components/UsersCalls";
import { useScreenShare } from "../../../../../../store/videoCall/useScreenShare";


export const CallInterface = () => {

  const { screenStream } = useScreenShare();

  return (
    <div className="w-screen h-full p-2 overflow-y-hidden flex flex-col justify-between items-center text-white bg-overlay_1">
      {/* Componente ultra importante, NO MOVER POR FAVOR */}
      <div></div>

      {screenStream ? <Streaming /> : <NoStreaming />}

      <VideoCallControlls />
    </div>
  );
};

const Streaming: React.FC = () => {
  return (
    <>
      <div className={`w-full h-3/5`}>
        <SharedScreen />
      </div>

      <div className="w-full h-1/6">
        <UsersCalls />  
      </div>
    </>

  )
}

const NoStreaming: React.FC = () => {
  return (
    <div className="w-full h-3/5 flex justify-center items-center">
      <div className="w-full h-4/5 flex justify-center items-center overflow-y-auto">
        <UsersCalls />
      </div>
    </div>
  )
}



