import { useEffect } from "react";
import { useChannelList } from "../../hooks/useChannelList";
import { AcordeonItems, AcordeonMenu } from "./AcordeonMenu/AcordeonIndex";
import { ChannelCategory } from "../../Enums/SpecificServer";

export const ChannelList = ({ channels }: { channels: Channels[] }) => {
  const { channelList, setChannelList } = useChannelList();

  useEffect(() => {
    const groupedData = channels.reduce((acc: any, curr: any) => {
      const category = curr.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(curr);
      return acc;
    }, {});

    const channels_by_categories: Channels[][] = Object.values(groupedData);
    const formatedChannels: ServerChannelsAray = channels_by_categories.map(
      (channelArray) => {
        return {
          channels: [...channelArray],
          isCategoryActive: false,
          category: channelArray[0].category,
        };
      }
    );

    setChannelList(formatedChannels);
  }, []);
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
