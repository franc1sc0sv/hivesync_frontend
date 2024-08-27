import { ReactNode, createContext, useEffect, useState } from "react";
import { useFetchID } from "../../../../hooks/useFecthID";
import { get_friend_data } from "../../../../api/user_info";
import { LoadingPage } from "../../../routes/loadingPage";
import { useNavigate } from "react-router-dom";

interface ChatContextProps {
  friend: UserInfo;
  setFriend: React.Dispatch<React.SetStateAction<UserInfo>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const user_data: UserInfo = {
  about: "",
  backgroundUrl: "",
  createdAt: "",
  id: "",
  id_user: "",
  name: "",
  profileUrl: "",
  username: "",
};

const get_id = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const extractedId = urlParts[urlParts.length - 1];

  return extractedId;
};

export const ChatContext = createContext<ChatContextProps>({
  friend: user_data,
  setFriend: () => {},
  messages: [],
  setMessages: () => {},
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [friend, setFriend] = useState<UserInfo>(user_data);
  const [messages, setMessages] = useState<Message[]>([]);

  const { fecthData, isLoading } = useFetchID({
    api_function: get_friend_data,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const id_user = get_id();
        const friend = await fecthData(id_user);
        console.log(friend);
        setFriend(friend);
      } catch (e) {
        navigate("/app/@me");
      }
    };
    fetcher();
  }, []);

  if (isLoading || friend.id === "") return <LoadingPage />;
  return (
    <ChatContext.Provider
      value={{
        friend,
        messages,
        setFriend,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const Messages = [
  {
    id: "1e2f3g4h-9012-3456-7890-123456789012",
    message: "Hola, ¿cómo estás?",
    sendAt: "2024-08-25T16:00:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "2f3g4h5i-0123-4567-8901-234567890123",
    message: "¡Hola! Estoy bien, ¿y tú?",
    sendAt: "2024-08-25T16:01:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "3g4h5i6j-1234-5678-9012-345678901234",
    message: "También estoy bien. He estado ocupado con el trabajo.",
    sendAt: "2024-08-25T16:02:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "4h5i6j7k-2345-6789-0123-456789012345",
    message: "Sí, yo también he estado bastante ocupado.",
    sendAt: "2024-08-25T16:03:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "5i6j7k8l-3456-7890-1234-567890123456",
    message: "¿Qué has estado haciendo en el trabajo?",
    sendAt: "2024-08-25T16:04:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "6j7k8l9m-4567-8901-2345-678901234567",
    message: "He estado trabajando en un nuevo proyecto de desarrollo.",
    sendAt: "2024-08-25T16:05:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "7k8l9m0n-5678-9012-3456-789012345678",
    message: "Eso suena interesante. ¿Qué tipo de proyecto es?",
    sendAt: "2024-08-25T16:06:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "8l9m0n1o-6789-0123-4567-890123456789",
    message: "Es un proyecto de aplicación web para gestionar tareas.",
    sendAt: "2024-08-25T16:07:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "9m0n1o2p-7890-1234-5678-901234567890",
    message: "¡Genial! ¿Qué tecnologías estás usando?",
    sendAt: "2024-08-25T16:08:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "0n1o2p3q-8901-2345-6789-012345678901",
    message: "Estamos usando React para el frontend y Node.js para el backend.",
    sendAt: "2024-08-25T16:09:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "1o2p3q4r-9012-3456-7890-123456789012",
    message: "¡Perfecto! Estoy usando algo similar en mi proyecto actual.",
    sendAt: "2024-08-25T16:10:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "2p3q4r5s-0123-4567-8901-234567890123",
    message: "¿Cuál es el principal desafío que estás enfrentando?",
    sendAt: "2024-08-25T16:11:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "3q4r5s6t-1234-5678-9012-345678901234",
    message:
      "El desafío principal es manejar el estado global de la aplicación.",
    sendAt: "2024-08-25T16:12:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
  {
    id: "4r5s6t7u-2345-6789-0123-456789012345",
    message:
      "Sí, eso puede ser complicado. ¿Estás usando algún gestor de estado?",
    sendAt: "2024-08-25T16:13:00Z",
    id_user: "91b240e7-1c7b-4120-97be-1cf73f62f503",
    id_inbox: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
  },
  {
    id: "5s6t7u8v-3456-7890-1234-567890123456",
    message: "Sí, estoy usando Redux para el estado global.",
    sendAt: "2024-08-25T16:14:00Z",
    id_user: "6daba3e6-c0cf-478d-aab4-6906f24ff129",
    id_inbox: "91b240e7-1c7b-4120-97be-1cf73f62f503",
  },
];
