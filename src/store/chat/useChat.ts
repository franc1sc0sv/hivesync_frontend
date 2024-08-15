import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MessageProps } from "../../pages/User/Chat/mock/messages";

const storedConversation = localStorage.getItem("conversation");

const useChat = create<StoreProps>()(
  persist(
    (set, get) => ({
      messages: storedConversation ? JSON.parse(storedConversation) : [],
      sendMessage: (message: MessageProps) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      getMessages: () => get().messages,
      shouldScrollToBottom: false,
      setShouldScrollToBottom: (value) => set({ shouldScrollToBottom: value }),
    }),
    {
      name: "conversation",
      getStorage: () => localStorage,
    }
  )
);

export default useChat;
