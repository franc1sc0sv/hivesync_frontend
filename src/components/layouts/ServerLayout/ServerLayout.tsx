import { Notifications } from "../../Alerts/Notification";
import { Channel } from "./Components/Channel/Channel";
import { ServerHome } from "./Components/ServerHome/ServerHome";
import { ServerIcons } from "./Components/ServerIcons/ServersIcons";

import { NoServers } from "./Components/NoServers";
import { useServer } from "./hooks/useServer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ServerLayout = () => {
  const { server_data, selected_server } = useServer();
  const navigate = useNavigate()
  const stylesServers = server_data.length ? "w-[200%]" : "w-full";


  useEffect(() => {
    const areServers = server_data.length;
    if (!areServers) {
      navigate("/app/")
    }
  }, [])

  return (
    <article className={`flex h-full gap-3 ${stylesServers}`}>
      <ServerIcons server_data_icons={server_data} />
      <ServerHome specific_server_data={selected_server} />
      <Channel />
      <Notifications />
    </article>
  );
};


export const NoServersLayout = () => {
  return (
    <article className={`flex h-full gap-3 w-full`}>
      <ServerIcons server_data_icons={[]} />
      <NoServers />
      <Notifications />
    </article>)

}
