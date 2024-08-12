import { ChatHeader } from "./Components/chatHeader";
import { Conversation } from "./Components/conversation";
import { MessageInput } from "./Components/messageInput";

export const ChatPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-overlay_1">
      <ChatHeader username="Leopardo Meci" />
      <Conversation />
      <MessageInput />
    </div>
  );
};