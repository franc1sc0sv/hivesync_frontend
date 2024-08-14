import { HiHashtag } from "react-icons/hi";
import { HiSpeakerWave } from "react-icons/hi2";
import { ChannelCategory, ChannelType } from "../../../Enums/SpecificServer";
import { useChannelList } from "../../../hooks/useChannelList";

export const ItemAcordeonChannel = ({
  channel,
  isCategoryOpen,
}: {
  channel: Channels;
  isCategoryOpen?: boolean;
}) => {
  const { setCurrentChannel } = useChannelList();

  const handleClick = () => {
    setCurrentChannel(channel.id);
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
        className={` cursor-pointer transition-all flex gap-2 items-center mr-3 p-2 rounded-overlay font-almarai ${activeStyles}`}
      >
        <IconChannel type={channel.type} />
        <p>{channel.name}</p>
      </div>
    )
  );
};

export const IconChannel = ({ type, size = 28 }: { type: ChannelType, size?: number }) => {
  return type === ChannelType.TEXT ? (
    <HiHashtag size={size} />
  ) : (
    <HiSpeakerWave size={size} />
  );
};
