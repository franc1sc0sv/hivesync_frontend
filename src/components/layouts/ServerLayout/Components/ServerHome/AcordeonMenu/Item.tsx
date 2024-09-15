import { HiHashtag } from "react-icons/hi";
import { HiSpeakerWave } from "react-icons/hi2";
import {
  ChannelCategory,
  ChannelTypeEnum,
} from "../../../Enums/SpecificServer";
import { useChannelList } from "../../../hooks/useChannelList";
import { ChannelsFormated } from "../../../types/server";
import { useHandleChannelType } from "../../../hooks/useHandleChannels";
import { TopChannelBar } from "../../Channel/Components/topChannelBar";
import { NoChannelSelected } from "../../Channel/Channel";

export const ItemAcordeonChannel = ({
  channel,
  isCategoryOpen,
}: {
  channel: ChannelsFormated;
  isCategoryOpen?: boolean;
}) => {
  const { setCurrentChannel, actualChannel } = useChannelList();

  
  const handleChannelType = useHandleChannelType({
    channelToCompare: actualChannel,
    isntFirsTime: false,
    //acá va el componente de chats
    childrenFakePage: actualChannel ? <TopChannelBar /> : <NoChannelSelected />,
  });

  const handleClick = async () => {
    setCurrentChannel(channel.id);
    
  
    await handleChannelType(channel);
  };

  const showChannel = isCategoryOpen || (!isCategoryOpen && channel.isSelected);
  const hasNoCategory = channel.category === ChannelCategory.NO_CATEGORY;
  const activeStyles = channel.isSelected
    ? "bg-overlay_4 text-custom_white"
    : "text-gray";

  return (
    (showChannel || hasNoCategory) && (
      <div
        onClick={handleClick}
        className={`cursor-pointer transition-all flex gap-2 items-center mr-3 p-2 rounded-overlay font-almarai ${activeStyles}`}
      >
        <IconChannel type={channel.type} />
        <p>{channel.name}</p>
      </div>
    )
  );
};

export const IconChannel = ({
  type,
  size = 28,
}: {
  type: ChannelTypeEnum;
  size?: number;
}) => {
  return type === ChannelTypeEnum.TEXT ? (
    <HiHashtag size={size} />
  ) : (
    <HiSpeakerWave size={size} />
  );
};
