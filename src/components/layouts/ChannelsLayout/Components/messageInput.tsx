import { useEffect } from "react";
import { SendIcon } from "../../../../components/Icons/send";

import { useSendMessage } from "../../../../hooks/useSendMessage";
import { useChat } from "../Context/useChat";

export const MessageInput: React.FC = () => {
  const { onSubmit, register, setValue } = useSendMessage();

  const { channel } = useChat();

  useEffect(() => {
    const token = localStorage.getItem("token");

    setValue("room", channel?.id);
    setValue("token", token);
  }, [onSubmit]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row items-center justify-between w-full gap-3 p-5 "
    >
      <div className="relative w-full">
        <input
          {...register("message")}
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
