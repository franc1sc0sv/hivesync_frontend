import { FiCamera } from "react-icons/fi";
import { MdCallEnd } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { MdCoPresent } from "react-icons/md";

import { ButtonCallsProps } from "../types";
import { ButtonCalls } from "./Button";
import { BUTTON_TYPE } from "../enums";

import { useNotifications } from "../../../../../../../store/useNotifications";
import useFakePages from "../../../../../../../store/useFakePage";

export const VideoCallControlls = () => {

  const { setNotifications } = useNotifications();
  const { removeFakePage, fakePages } = useFakePages();

  const lastPageId = fakePages.length > 0 ? fakePages[fakePages.length - 1].id : null;


  const controlls: ButtonCallsProps[] = [
    {
      Icon: FaMicrophone,
      onClick: () => { },
      type: BUTTON_TYPE.MICROPHONE,
    },
    {
      Icon: FiCamera,
      onClick: () => { },
      type: BUTTON_TYPE.CAMERA,
    },
    {
      Icon: MdCoPresent,
      onClick: () => { },
      type: BUTTON_TYPE.PRESENTATION,
    },
    {
      Icon: MdCallEnd,
      onClick: async () => {
        if (lastPageId !== null) {
          removeFakePage(lastPageId);
        }
        setNotifications({
          severity: "info",
          message: "Llamada finalizada"
        });
      },
      type: BUTTON_TYPE.HANG_UP,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-20 gap-3 bg-opacity-50 rounded-2xl bg-overlay_2">
      {controlls.map((controll, i) => {
        return (
          <ButtonCalls
            key={i}
            Icon={controll.Icon}
            onClick={controll.onClick}
            type={controll.type}
          />
        );
      })}
    </div>
  );
};
