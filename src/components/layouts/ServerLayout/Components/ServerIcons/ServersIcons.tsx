import { ServerFolder } from "./ServerFolder";
import { ServerIcon } from "./ServerIcon";

type PropsServerIcons = {
  serverDataIcons: ServerDataIcons;
};

export const ServerIcons: React.FC<PropsServerIcons> = ({
  serverDataIcons,
}) => {
  return (
    <section className="flex flex-col items-center w-48 h-full gap-4 px-1 py-4 overflow-y-auto bg-overlay_2 rounded-overlay">
      <Icons serverDataIcons={serverDataIcons} />
    </section>
  );
};

const Icons: React.FC<PropsServerIcons> = ({ serverDataIcons }) => {
  return serverDataIcons.map((server, i) => {
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
