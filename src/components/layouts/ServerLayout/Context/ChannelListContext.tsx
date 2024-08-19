import { ReactNode, createContext, useEffect, useState } from "react";
import {
  ChannelsFormated,
  ChannelType,
  ServerChannelsAray,
} from "../types/server";

import { useNavigate, useLocation } from "react-router-dom";

interface ChannelContextType {
  channelList: ServerChannelsAray;
  setChannelList: React.Dispatch<React.SetStateAction<ServerChannelsAray>>;
  toogleCategory: (category: string) => void;
  setCurrentChannel: (id: string) => void;
}

const obtener_canal_id_activo = () => {
  const currentURL = window.location.pathname;
  return currentURL.split("/")[3];
};

const format_channels = ({
  channels,
  id,
}: {
  channels: ChannelType[];
  id: string;
}) => {
  return channels.map((channel) => {
    return { ...channel, isSelected: id === channel.id };
  });
};

const updateUrl = (id: string) => {
  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace(/[^/]+$/, id);

  window.history.pushState({}, "", newUrl);
};

export const ChannelListContext = createContext<ChannelContextType>({
  channelList: [],
  setChannelList: () => {},
  toogleCategory: () => {},
  setCurrentChannel: () => {},
});

export const ChannelListProvider = ({
  children,
  channels,
}: {
  children: ReactNode;
  channels: ChannelType[];
}) => {
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
    updateUrl(id);
    setChannelList(new_data);
  };

  useEffect(() => {
    const active_channel = obtener_canal_id_activo();

    const formaetedChannels = format_channels({
      channels: channels,
      id: active_channel,
    });

    const groupedData = formaetedChannels.reduce((acc: any, curr: any) => {
      const category = curr.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(curr);
      return acc;
    }, {});

    const channels_by_categories: ChannelsFormated[][] =
      Object.values(groupedData);

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
