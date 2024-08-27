import { Notifications } from "../../../components/Alerts/Notification";
import { ShowFakePages } from "../../../components/fakePages/ShowFakePages";

import { Conversation } from "./Components/conversation";
import { ChatHeader } from "./Components/Header/chatHeader";
import { MessageInput } from "./Components/messageInput";
import { ChatProvider } from "./Context/ChatContext";

export const ChatLayout = () => {
  return (
    <main className="flex flex-col justify-between w-full h-screen bg-overlay_1">
      <ChatProvider>
        <ChatHeader />
        <Conversation />
        <MessageInput />

        <ShowFakePages />
        <Notifications />
      </ChatProvider>
    </main>
  );
};
