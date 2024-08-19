import { ReactNode, createContext, useState } from "react";
import { ServerChannelsAray } from "../types/server";

interface ChannelContextType {
  channelList: ServerChannelsAray;
  setChannelList: React.Dispatch<React.SetStateAction<ServerChannelsAray>>;
  toogleCategory: (category: string) => void;
  setCurrentChannel: (id: string) => void;
}

export const ChannelListContext = createContext<ChannelContextType>({
  channelList: [],
  setChannelList: () => {},
  toogleCategory: () => {},
  setCurrentChannel: () => {},
});

export const ChannelListProvider = ({ children }: { children: ReactNode }) => {
  const [channelList, setChannelList] = useState<ServerChannelsAray>([]);

  const toogleCategory = (category: string) => {
    const categoryChanels = channelList.filter(
      (list) => list.category === category
    );

    const new_data = channelList.map((list) => {
      return category === list.category
        ? { ...categoryChanels[0], isCategoryActive: !list.isCategoryActive }
        : list;
    });

    setChannelList(new_data);
  };

  const setCurrentChannel = (id: string) => {
    const new_data = channelList.map((list) => {
      const formated_channels = list.channels.map((channel) => {
        return { ...channel, isSelected: id === channel.id };
      });
      return { ...list, channels: formated_channels };
    });
    setChannelList(new_data);
  };

  return (
    <ChannelListContext.Provider
      value={{
        channelList,
        setChannelList,
        toogleCategory,
        setCurrentChannel,
      }}
    >
      {children}
    </ChannelListContext.Provider>
  );
};
