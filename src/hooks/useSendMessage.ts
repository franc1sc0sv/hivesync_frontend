import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_RESPONSE_ERROR_CLASS } from "../class/api_responses_instances";
import { useNotifications } from "../store/useNotifications";
import { useSocketContext } from "../context/useSocket";
import { send_message } from "../api/channel";

export const useSendMessage = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isLoading, setIsloading] = useState(false);

  const { setNotifications } = useNotifications();
  const { socket } = useSocketContext();
  // const { setMessages, unFormatedMessages, setUnFormatedMessages } = useChat();

  const onSubmit = async (data: any) => {
    try {
      setIsloading(true);
      const newMessage = await send_message(data);

      const datos = {
        message: newMessage,
        id_room: newMessage.room,
      };

      socket?.emit("send_message", datos);

      setIsloading(false);
      reset();
    } catch (e) {
      if (e instanceof API_RESPONSE_ERROR_CLASS) {
        setNotifications({
          message: e.DATA.message,
          severity: "warning",
        });
        setIsloading(false);
        return;
      }

      setNotifications({
        message: "Error desconocido",
        severity: "error",
      });
      setIsloading(false);
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    isLoading,
    reset,
    setValue,
  };
};
