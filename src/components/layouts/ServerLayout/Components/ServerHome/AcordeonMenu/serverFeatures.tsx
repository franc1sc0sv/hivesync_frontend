import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { PiAlignBottom } from "react-icons/pi";
import { GoDependabot } from "react-icons/go";
import { IoDocumentText } from "react-icons/io5";
import { PiPencilCircleLight } from "react-icons/pi";
import { PiHandWavingFill } from "react-icons/pi";



interface ChannelProps {
  id: string | number;
  name: string;
  onClick: () => void;
  icon: IconType;
}

export const features: ChannelProps[] = [
  {
    id: 1,
    name: "ChatGPT",
    onClick: () => <Link to={"/ai"} />,
    icon: GoDependabot
  },
  {
    id: 2,
    name: "Documentos",
    onClick: () => alert("Channel 2 clicked!"),
    icon: IoDocumentText
  },
  {
    id: 3,
    name: "Espacio creativo",
    onClick: () => alert("Channel 3 clicked!"),
    icon: PiPencilCircleLight
  },
  {
    id: 4,
    name: "Hivesync Signs",
    onClick: () => alert("Channel 3 clicked!"),
    icon: PiHandWavingFill
  },
];
