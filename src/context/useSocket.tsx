import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import io, { Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

interface SocketContextProviderProps {
  children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const API_URL = import.meta.env.VITE_API_URL + "/zelda";

  useEffect(() => {
    const socketInstance = io(API_URL, {
      transports: ["websocket"],
    });
    setSocket(socketInstance);

    socketInstance.on("connect_error", (err) => {
      // the reason of the error, for example "xhr poll error"
      console.log(err);
    });

    socketInstance.on("connnection", () => {
      console.log("connected to server");
    });
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
