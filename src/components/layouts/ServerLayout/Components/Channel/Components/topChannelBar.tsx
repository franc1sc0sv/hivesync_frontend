import { HiSpeakerWave } from "react-icons/hi2";
import { useChannelList } from "../../../hooks/useChannelList";

export const TopChannelBar = () => {
  const { actualChannel } = useChannelList(); 
  

  return (
    <div className="flex items-center mb-4">
      <HiSpeakerWave className="text-2xl mr-2" />
      <h2 className="text-xl font-semibold">
        {actualChannel ? actualChannel.name : "No channel selected"}
      </h2>
    </div>
  );
};
