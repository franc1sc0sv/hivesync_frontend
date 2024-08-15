import useChat from "../../../../store/chat/useChat";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface MessagesProps {
    text?: string;
    img?: string;
    voiceNote?: string;
}

export const Conversation: React.FC<MessagesProps> = () => {
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
    const { getMessages, shouldScrollToBottom, setShouldScrollToBottom } = useChat();

    const conversation = getMessages();

    useEffect(() => {
        if (shouldScrollToBottom) {
            endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
            setShouldScrollToBottom(false); 
        }
    }, [conversation, shouldScrollToBottom, setShouldScrollToBottom]);

    return (
        <div className="w-full h-[70%] overflow-y-auto">
            {conversation.map((message, index) => (
                <div key={index}>
                    {message.isUserSender ? (
                        <SentMessage text={message.content} />
                    ) : (
                        <ReceivedMessage text={message.content} />
                    )}
                </div>
            ))}
            <div ref={endOfMessagesRef} />
        </div>
    );
};

const ReceivedMessage: React.FC<MessagesProps> = ({ text }) => {
    return (
        <div className="w-full my-3 flex items-center justify-start">
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
        <div className="w-full my-3 flex items-center justify-end">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
