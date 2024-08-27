import { VideoCallControlls } from "./components/videocallControls";
import { SharedScreen } from "./components/shareScreen";
import { useScreenShare } from "../../../store/videoCall/useScreenShare";
import { UsersCalls } from "./components/usersCards";
import { useState } from "react";
import useDisplayMembers from "../../../store/videoCall/useDisplayMembers";

export const VideoCallLayout = () => {

  const { screenStream } = useScreenShare();

  return (
    <div className="w-screen h-full p-2 flex flex-col justify-between items-center text-white bg-overlay_1 overflow-y-auto">

      {/* Componente ultra importante, NO MOVER POR FAVOR */}
      <div></div>

      {screenStream ? <Streaming /> : <NoStreaming />}

      <VideoCallControlls />
    </div>
  );
};

const Streaming: React.FC = () => {

  const {displayMembers, setDisplayMembers} = useDisplayMembers(); 

  const handleShowUsers = () => {
    if (displayMembers) {
      setDisplayMembers(false);
      return
    }
  }

  return (
    <div 
    style={{justifyContent: displayMembers ? "between" : "center"}}
    className="w-full h-4/5 flex flex-col min-[580px]:flex-row justify-between items-center">

      <div
        onClick={handleShowUsers}
        className="w-full min-[580px]:h-full">
        <SharedScreen />
        <p>{}</p>
      </div>

      <div
        style={{ display: displayMembers ? "block" : "none" }}
        className="w-full h-1/2 min-[580px]:w-full lg:h-3/5 lg:w-1/2">
        <UsersCalls />
      </div>
    </div>

  )
}

const NoStreaming: React.FC = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full p-4 text-white bg-overlay_1">
      <UsersCalls />
    </div>
  )
}



