import { ReactNode, createContext, useEffect, useState } from "react";

interface ServerContextProps {
  server_data: ServerDataIcons;
  setServerData: React.Dispatch<React.SetStateAction<ServerDataIcons>>;
  selected_server: SpecificServer;
  setSelectedServer: React.Dispatch<React.SetStateAction<SpecificServer>>;
}

export const ServerContext = createContext<ServerContextProps>({
  server_data: [],
  setServerData: () => {},
  selected_server: {
    IconServerURL: "",
    url: "",
    active: false,
    id: "",
    name: "",
    channels: [],
  },
  setSelectedServer: () => {},
});

export const ServerProvider = ({ children }: { children: ReactNode }) => {
  const [server_data, setServerData] = useState<ServerDataIcons>(getServers());
  const [selected_server, setSelectedServer] = useState<SpecificServer>({
    IconServerURL: "",
    url: "",
    active: false,
    id: "",
    name: "",
    channels: [],
  });

  const obtener_server_activo = () => {
    const currentURL = window.location.pathname;
    return currentURL.split("/")[2];
  };

  const obtener_servidores = () => {
    return server_data.map((server: any) => {
      return {
        ...server,
        active: server.id === obtener_server_activo(),
      };
    });
  };

  const obtener_servidor_activo = (servers: any) => {
    const activeServer = servers.filter((server: any) => server.active)[0];

    const channels = getChannels();
    const categories = getCategories();

    // Asociar el nombre de la categoría con cada canal
    const channelsWithCategoryNames = channels.map((channel: any) => {
      const category = categories.find(
        (cat: any) => cat.id === channel.categoryID
      );
      return {
        ...channel,
        category: category ? category.name : "Categoría desconocida",
      };
    });

    // Agregar los canales al servidor seleccionado
    return {
      ...activeServer,
      channels: channelsWithCategoryNames.filter(
        (channel: any) => channel.serverID === obtener_server_activo()
      ),
    };
  };

  useEffect(() => {
    const servers = obtener_servidores();

    setServerData(servers);
    setSelectedServer(obtener_servidor_activo(servers));
  }, []);

  return (
    <ServerContext.Provider
      value={{ selected_server, server_data, setSelectedServer, setServerData }}
    >
      {children}
    </ServerContext.Provider>
  );
};

const getServers = () => {
  const servers = JSON.parse(localStorage.getItem("servers") || "[]");
  return servers;
};

export const getChannels = () => {
  const channels = JSON.parse(localStorage.getItem("serverChannels") || "[]");
  return channels;
};

export const getCategories = () => {
  const categories = JSON.parse(
    localStorage.getItem("serverCategories") || "[]"
  );
  return categories;
};
