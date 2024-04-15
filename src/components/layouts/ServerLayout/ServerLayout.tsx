import { Channel } from "./Components/Channel/Channel";
import { ServerHome } from "./Components/ServerHome/ServerHome";
import { ServerIcons } from "./Components/ServerIcons/ServersIcons";

import { serverDataIcons } from "./mocks/servers_data";
import { specific_server_data } from "./mocks/specific_server_data";

export const ServerLayout = () => {
  return (
    <main className="flex w-[180%] h-full gap-3 overflow-hidden">
      <ServerIcons server_data_icons={serverDataIcons} />
      <ServerHome specific_server_data={specific_server_data} />
      <Channel />
    </main>
  );
};
