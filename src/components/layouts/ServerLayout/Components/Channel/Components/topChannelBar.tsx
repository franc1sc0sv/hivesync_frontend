import { HiHashtag } from "react-icons/hi2";
import { HiMicrophone } from "react-icons/hi";
import { useChannelList } from "../../../hooks/useChannelList";

export const TopChannelBar = () => {
  const { actualChannel } = useChannelList(); 

  // Use a ternary operator to set the icon and channel name
  const icon = actualChannel
    ? (actualChannel.type === 'TEXT' 
        ? <HiHashtag className="text-2xl mr-2" /> 
        : <HiMicrophone className="text-2xl mr-2" />)
    : null;

  const channelName = actualChannel ? actualChannel.name : "No channel selected";

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="flex items-center mb-4 text-white">
        {icon}
        <h2 className="text-xl font-semibold">
          {channelName}
        </h2>
      </div>
    </div>
  );
};
