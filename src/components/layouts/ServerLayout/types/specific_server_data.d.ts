// type Channels = {
//   id: string;
//   name: string;
//   categoryID: string;
//   category: Category | any;
//   type: ChannelType;
//   isSelected: boolean;
// };

type Channels = {
  id: string;
  name: string;
  categoryID: string;
  category: Category | any;
  type: ChannelType;
  isSelected: boolean;
};

type ServerDataIcons = (ServerInfoIcons[] | ServerInfoIcons)[];

type SpecificServer = {
  IconServerURL: string;
  url: string;
  active: boolean;
  id: string;
  name: string;
  channels: Channels[];
};

type ServerChannels = {
  channels: Channels[];
  isCategoryActive: boolean;
  category: Category | any;
};

type ServerChannelsAray = {
  channels: Channels[];
  isCategoryActive: boolean;
  category: Category | any;
}[];
