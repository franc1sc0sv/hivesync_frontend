import { SendIcon } from "../../../../components/Icons/send";

import { useCustomForm } from "../../../../hooks/useForm";
import useChat from "../../../../store/chat/useChat";

export const MessageInput: React.FC = () => {
  const { sendMessage, setShouldScrollToBottom } = useChat();

  const api_function = async (data: any) => {
    const textMessage = data.text;

    if (textMessage) {
      const message = {
        isUserSender: true,
        content: textMessage,
      };

      if (message.content.trim().length === 0) return;

      sendMessage(message);
      setShouldScrollToBottom(true);
    }
  };

  const post_success_function = () => {};

  const { onSubmit, register } = useCustomForm(
    api_function,
    post_success_function,
    ""
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row items-center justify-between w-full gap-3 p-5 "
    >
      <div className="relative w-full">
        <input
          {...register("text")}
          placeholder="Escribe un mensaje"
          type="text"
          className="w-full px-4 py-3 pr-10 text-sm transition duration-300 border-none font-amiko bg-overlay_2 rounded-overlay text-custom_white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button type="submit">
            <SendIcon size={20} color="white" />
          </button>
        </div>
      </div>
    </form>
  );
};
