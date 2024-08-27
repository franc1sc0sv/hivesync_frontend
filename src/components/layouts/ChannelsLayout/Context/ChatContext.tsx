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
