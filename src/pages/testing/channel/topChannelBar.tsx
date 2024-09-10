import { useChannelList } from "../../../components/layouts/ServerLayout/hooks/useChannelList";
import { HiSpeakerWave } from "react-icons/hi2";

export const TopChannelBar = () => {
  const { actualChannel } = useChannelList(); // Usamos el hook personalizado

  return (
    <div className="flex items-center mb-4">
      <HiSpeakerWave className="text-2xl mr-2" />
      <h2 className="text-xl font-semibold">
        {actualChannel ? actualChannel.name : "No channel selected"}
      </h2>
    </div>
  );
};
