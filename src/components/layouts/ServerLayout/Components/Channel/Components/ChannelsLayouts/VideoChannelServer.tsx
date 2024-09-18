import { HiHashtag } from "react-icons/hi2";
import { useChannelList } from "../../../../hooks/useChannelList";

export const VideoChannelServer = () => {
  const { actualChannel } = useChannelList();

  const channelName = actualChannel
    ? actualChannel.name
    : "No channel selected";

  return (
    <div className="flex justify-center w-full h-full ">
      <div className="flex items-center mb-4 text-white">
        <HiHashtag className="mr-2 text-2xl" />
        <h2 className="text-xl font-semibold">{channelName}</h2>
      </div>
    </div>
  );
};
