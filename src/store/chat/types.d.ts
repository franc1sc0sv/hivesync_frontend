type StoreProps = {
  messages: MessageProps[];
  sendMessage: (message: MessageProps) => void;
  getMessages: () => MessageProps[];
  shouldScrollToBottom: boolean;
  setShouldScrollToBottom: (value: boolean) => void;
};
