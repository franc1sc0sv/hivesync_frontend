import { ShowFakePages } from "../../fakePages/ShowFakePages";
import { ChatHeader } from "./Components/chatHeader";
import { Conversation } from "./Components/conversation";
import { MessageInput } from "./Components/messageInput";

export const ChatLayout = () => {

  const conversation: any[] = [];

  return (
    <div className="flex flex-col justify-between w-full h-screen bg-overlay_1">
      <ChatHeader username="Johnny Worthington" />
      <Conversation conversation={conversation}/>
      <MessageInput />
      <ShowFakePages />
    </div>
  );
};
