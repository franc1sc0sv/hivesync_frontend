import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { MessageProps } from "../../pages/User/Chat/mock/messages";

const storedConversation = localStorage.getItem("conversation");
const conversation: MessageProps[] = storedConversation ? JSON.parse(storedConversation) : [];

interface StoreProps {
    messages: MessageProps[];
    sendMessage: (message: MessageProps) => void;
    getMessages: () => MessageProps[];
    shouldScrollToBottom: boolean,
    setShouldScrollToBottom: (value: boolean) => void
}

const useChat = create<StoreProps>()(
  persist(
    (set, get) => ({
      messages: conversation,
      sendMessage: (message: MessageProps) => set((state) => ({
        messages: [...state.messages, message]
      })),
      getMessages: () => get().messages,
      shouldScrollToBottom: false,
      setShouldScrollToBottom: (value) => set({ shouldScrollToBottom: value })
    }),
    {
      name: "conversation",
      getStorage: () => localStorage
    }
  )
);

export default useChat;
