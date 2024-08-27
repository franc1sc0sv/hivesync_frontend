import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Notifications } from "../../../../components/Alerts/Notification";
import { useChat } from "../Context/useChat";
import { UserAvatar } from "../../../../components/Avatars/UserAvatar";

interface MessagesProps {
  text?: string;
  img?: string;
  voiceNote?: string;
}

interface MessagesList {
  content: string;
  isUserSender: boolean;
}

export const Conversation = () => {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const { messages } = useChat();
  // const { getMessages, shouldScrollToBottom, setShouldScrollToBottom } =
  //   useChat();

  // useEffect(() => {
  //   endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (shouldScrollToBottom) {
  //     setShouldScrollToBottom(false);
  //   }
  // }, [conversation, shouldScrollToBottom, setShouldScrollToBottom]);

  return (
    <div className="flex flex-col justify-end w-full h-full gap-2 px-5 overflow-y-auto">
      <Notifications />
      <StartConvsersation />
      <div ref={endOfMessagesRef} />
    </div>
  );
};

const StartConvsersation = () => {
  const { friend } = useChat();

  return (
    <div className="flex flex-col w-full gap-3">
      <UserAvatar profileURl={friend.profileUrl} username={friend.username} />
      <div className="flex flex-col gap-1">
        <p className="text-4xl text-white font-amiko">{friend.name}</p>
        <p className="text-lg text-gray font-amiko">{friend.username}</p>
        <p className="text-sm text-gray font-amiko">
          Este es el principio de tu epica conversacion con {friend.username}
        </p>
      </div>
    </div>
  );
};

const ReceivedMessage: React.FC<MessagesProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-start w-full my-3">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-primary mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-xl rounded-es-xl"
        >
          <p className="text-sm font-almarai py-2.5 text-gray-900 dark:text-white">
            {text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SentMessage: React.FC<MessagesProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-end w-full my-3">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-overlay_2 mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-xl rounded-es-xl"
        >
          <p className="text-sm font-almarai py-2.5 text-gray-900 dark:text-white">
            {text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
