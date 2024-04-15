type Channels = {
  name: string;
  category: Category | any;
  isSelected: boolean;
  type: ChannelType;
  id: string;
};
type SpecificServer = {
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
