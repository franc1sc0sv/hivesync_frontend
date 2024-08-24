import { ShowFakePages } from "../../fakePages/ShowFakePages";
import { ChatHeader } from "./Components/chatHeader";
import { Conversation } from "./Components/conversation";
import { MessageInput } from "./Components/messageInput";
//mock
import { conversation } from "./mock/messages";

export const ChatLayout = () => {

  return (
    <div className="flex flex-col justify-between w-full h-screen bg-overlay_1">
      <ChatHeader username="Johnny Worthington" />
      <Conversation conversation={conversation}/>
      <MessageInput />
      <ShowFakePages />
    </div>
  );
};
