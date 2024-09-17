import { ReactNode, createContext, useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { get_all_servers_by_user, get_server } from "../../../../api/server";
import { useFetchID } from "../../../../hooks/useFecthID";
import { CategoryType, ChannelType, SpecificServerType } from "../types/server";
import { LoadingPage } from "../../../routes/loadingPage";
import { useNavigate } from "react-router-dom";

interface ServerContextProps {
  server_data: ServerDataIcons;
  setServerData: React.Dispatch<React.SetStateAction<ServerDataIcons>>;
  selected_server: SpecificServerType;
  setSelectedServer: React.Dispatch<React.SetStateAction<SpecificServerType>>;
}

const defaultData: SpecificServerType = {
  id: "",
  name: "",
  avatarURL: "",
  privacity: "PRIVATE",
  id_user: "",
  createdAt: "",
  url: "",
  backgroundUrl: "",
  tags: [],
  categories: [],
  events: [],
  members: [],
  channels: [],
};

export const ServerContext = createContext<ServerContextProps>({
  server_data: [],
  setServerData: () => {},
  selected_server: defaultData,
  setSelectedServer: () => {},
});

const format_servers = (data: ServerDataIcons) => {
  if (!data.length) return;

  const formated_data = data.map((server) => {
    return {
      ...server,
      active: server.id === obtener_server_id_activo(),
    };
  });

  return formated_data;
};

const format_specific_server = (server: SpecificServerType) => {
  const channelsWithCategoryNames = server.channels.map(
    (channel: ChannelType) => {
      const category = server.categories.find(
        (cat: CategoryType) => cat.id === channel.CategoryID
      );
      return {
        ...channel,
        category: category ? category.name : "",
      };
    }
  );

  return {
    ...server,
    channels: channelsWithCategoryNames.filter(
      (channel) => channel.ServerID === obtener_server_id_activo()
    ),
  };
};

const obtener_server_id_activo = () => {
  const currentURL = window.location.pathname;
  return currentURL.split("/")[2];
};

const obtener_servidor_activo = (servers: ServerDataIcons) => {
  return servers.filter((server) => server.active)[0];
};

const set_ultimo_servidor = (specific_server: SpecificServerType) => {
  if (!specific_server.id) return;

  const firtsChannelID = specific_server.channels[0].id;
  const serverID = specific_server.id;

  const serverURL = `/app/${serverID}/${firtsChannelID}`;

  localStorage.setItem("lastserver", serverURL);
};

export const ServerProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, fecthData } = useFetch({
    api_function: get_all_servers_by_user,
    transformData: format_servers,
  });

  const { isLoading: isLoadingID, fecthData: fechtDataID } = useFetchID({
    api_function: get_server,
    transformData: format_specific_server,
  });

  const [server_data, setServerData] = useState<ServerDataIcons>([]);

  const [selected_server, setSelectedServer] =
    useState<SpecificServerType>(defaultData);

  const navigate = useNavigate();

  useEffect(() => {
    const loader = async () => {
      const servers = await fecthData();
      setServerData(servers);

      if (!servers?.length) return;
      const active_server = obtener_servidor_activo(servers);

      if (!active_server) {
        navigate(servers[0].url);
      }

      const specific_server = await fechtDataID(active_server.id);

      setSelectedServer(specific_server);

      set_ultimo_servidor(specific_server);
    };
    loader();
  }, []);

  if (isLoading || isLoadingID) return <LoadingPage />;

  return (
    <ServerContext.Provider
      value={{ selected_server, server_data, setSelectedServer, setServerData }}
    >
      {children}
    </ServerContext.Provider>
  );
};
