import { ShowFakePages } from "../../../components/fakePages/ShowFakePages";
import { ChatHeader } from "./Components/chatHeader";
import { Conversation } from "./Components/conversation";
import { MessageInput } from "./Components/messageInput";

export const ChatPage = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-overlay_1">
      <ChatHeader username="Leopardo Meci" />
      <Conversation />
      <MessageInput />
      <ShowFakePages />
    </div>
  );
};
