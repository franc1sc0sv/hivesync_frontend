import { ServerFolder } from "./ServerFolder";
import { ServerIcon } from "./ServerIcon";

type PropsServerIcons = {
  server_data_icons: ServerDataIcons;
};

export const ServerIcons: React.FC<PropsServerIcons> = ({
  server_data_icons,
}) => {
  return (
    <section className="flex flex-col items-center w-40 h-full gap-4 py-4 overflow-y-auto bg-overlay_2 rounded-overlay">
      <Icons server_data_icons={server_data_icons} />
    </section>
  );
};

const Icons: React.FC<PropsServerIcons> = ({ server_data_icons }) => {
  return server_data_icons.map((server, i) => {
    return !Array.isArray(server) ? (
      <ServerIcon
        IconServerURL={server.IconServerURL}
        active={server.active}
        name={server.name}
        url={server.url}
        key={i}
      />
    ) : (
      <ServerFolder serversFolder={server} key={i} />
    );
  });
};
