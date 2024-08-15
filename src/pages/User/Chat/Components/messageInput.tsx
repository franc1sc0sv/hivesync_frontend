import { SendIcon } from "../../../../components/Icons/send";

import { useCustomForm } from "../../../../hooks/useForm";
import useChat from "../../../../store/chat/useChat";
import { useState } from "react";

export const MessageInput: React.FC = () => {

    const [textValue, setTextValue] = useState("");

    const { sendMessage, setShouldScrollToBottom } = useChat();

    const api_function = async (data: any) => {
        const textMessage = data.text;

        if (textMessage) {
            const message = {
                isUserSender: true,
                content: textMessage
            };

            sendMessage(message);
            setShouldScrollToBottom(true);
        }
    };

    const post_success_function = () => {
        console.log("La API se llamó exitosa y épicamente");
    };

    const { onSubmit, register } = useCustomForm(api_function, post_success_function, "");

    return (
        <form
            onSubmit={onSubmit}
            className="w-[95%] flex flex-row items-center justify-between p-3 mx-auto my-3 rounded-xl bg-overlay_2 gap-3"
        >
            <div className="w-full relative">
                <input
                    {...register("text")}
                    placeholder="Escribe un mensaje"
                    type="text"
                    className="w-full bg-overlay_2 px-4 py-2 pr-10 transition duration-300 rounded-overlay border-custom_white border-2 placeholder-custom_white text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary"
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
