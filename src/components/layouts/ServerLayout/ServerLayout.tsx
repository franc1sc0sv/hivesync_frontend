import { Notifications } from "../../Alerts/Notification";
import { Channel } from "./Components/Channel/Channel";
import { ServerHome } from "./Components/ServerHome/ServerHome";
import { ServerIcons } from "./Components/ServerIcons/ServersIcons";

import { NoServers } from "./Components/NoServers";
import { useServer } from "./hooks/useServer";

export const ServerLayout = () => {
  const { server_data, selected_server } = useServer();

  const stylesServers = server_data.length ? "w-[200%]" : "w-full";

  return (
    <article className={`flex h-full gap-3 ${stylesServers}`}>
      <ServerIcons server_data_icons={server_data} />
      <AreServersView servers={server_data} selected_server={selected_server} />
      <Notifications />
    </article>
  );
};

const AreServersView = ({
  servers,
  selected_server,
}: {
  servers: ServerDataIcons;
  selected_server: SpecificServer;
}) => {
  const areServers = servers.length;
  return areServers ? (
    <>
      <ServerHome specific_server_data={selected_server} />
      <Channel />
    </>
  ) : (
    <NoServers />
  );
};
