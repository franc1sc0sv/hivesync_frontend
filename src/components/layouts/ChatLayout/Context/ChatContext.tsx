import { ReactNode, createContext, useEffect, useState } from "react";
import { useFetchID } from "../../../../hooks/useFecthID";
import { get_friend_data } from "../../../../api/user_info";
import { LoadingPage } from "../../../routes/loadingPage";
import { useNavigate } from "react-router-dom";
import { groupMessages } from "../utils/format_messages";
import { get_all_messages } from "../../../../api/channel";
import { useSocketContext } from "../../../../context/useSocket";

import notificationSound from "/public/sounds/sound.mp3";

interface ChatContextProps {
  friend: UserInfo;
  setFriend: React.Dispatch<React.SetStateAction<UserInfo>>;
  messages: GroupedMessagesTypeArray;
  setMessages: React.Dispatch<React.SetStateAction<GroupedMessagesTypeArray>>;
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
  const { socket } = useSocketContext();

  const [friend, setFriend] = useState<UserInfo>(user_data);
  const [messages, setMessages] = useState<GroupedMessagesTypeArray>([]);
  const [unFormatedMessages, setUnFormatedMessages] = useState<Message[]>([]);

  const { fecthData, isLoading } = useFetchID({
    api_function: get_friend_data,
  });

  const { fecthData: fecthDataMessages, isLoading: isLoadingMessages } =
    useFetchID({
      api_function: get_all_messages,
    });

  const navigate = useNavigate();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const id_user = get_id();
        const friend = await fecthData(id_user);
        const messages = await fecthDataMessages(friend.id);

        setUnFormatedMessages(messages);
        setMessages(groupMessages({ messages: messages }));
        setFriend(friend);
      } catch (e) {
        navigate("/app/@me");
      }
    };
    fetcher();
  }, []);

  useEffect(() => {
    const roomId = friend.id_user;

    if (socket && roomId) {
      socket.emit("join_room", roomId);
      console.log(`Joined room: ${roomId}`);

      return () => {
        socket.emit("leave_room", roomId);
      };
    }
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = async (newMessage: Message) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages(
        groupMessages({ messages: [...unFormatedMessages, newMessage] })
      );
    };

    socket.on("receive_message", handleNewMessage);

    return () => {
      socket.off("receive_message", handleNewMessage);
    };
  }, [socket, setMessages, messages, notificationSound]);

  if (isLoading || friend.id === "" || isLoadingMessages)
    return <LoadingPage />;
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
