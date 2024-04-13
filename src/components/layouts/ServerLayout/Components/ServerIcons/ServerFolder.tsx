import { ServerIcon } from "./ServerIcon";

type PropsServerIcons = {
  serversFolder: ServerInfoIcons[];
};

const get_first_four = (arr: ServerInfoIcons[]) => {
  return arr.slice(0, 4);
};

export const ServerFolder: React.FC<PropsServerIcons> = ({ serversFolder }) => {
  const firts_elements = get_first_four(serversFolder);
  return (
    <div className="grid w-16 h-16 grid-cols-2 grid-rows-2 p-1 rounded-xl place-items-center bg-light_blue">
      {firts_elements.map((server, i) => (
        <ServerIcon
          isFolder
          IconServerURL={server.IconServerURL}
          active={server.active}
          name={server.name}
          url={server.url}
          key={i}
        />
      ))}
    </div>
  );
};
