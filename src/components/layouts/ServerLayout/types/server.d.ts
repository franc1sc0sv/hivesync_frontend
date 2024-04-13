type ServerDataIcons = (ServerInfoIcons[] | ServerInfoIcons)[];

interface ServerInfoIcons {
  IconServerURL: string;
  url: string;
  active: boolean;
  name: string;
}
