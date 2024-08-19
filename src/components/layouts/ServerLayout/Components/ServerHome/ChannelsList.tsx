import { useChannelList } from "../../hooks/useChannelList";
import { AcordeonItems, AcordeonMenu } from "./AcordeonMenu/AcordeonIndex";
import { ChannelCategory } from "../../Enums/SpecificServer";

export const ChannelList = () => {
  const { channelList } = useChannelList();

  return (
    <article className="flex flex-col gap-5 overflow-y-auto">
      {channelList.map((channel) => {
        return channel.category === ChannelCategory.NO_CATEGORY ? (
          <AcordeonItems
            CategoryChannel={channel.channels}
            key={channel.category}
          />
        ) : (
          <AcordeonMenu key={channel.category} CategoryChannel={channel} />
        );
      })}
    </article>
  );
};
