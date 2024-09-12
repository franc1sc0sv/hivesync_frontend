import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
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

export const features = (): ChannelProps[] => { 
    const navigate = useNavigate();
  
    return [
      {
        id: 1,
        name: "Hivesync X ChatGPT",
        onClick: () => navigate("/app/ai"),
        icon: GoDependabot
      },
      {
        id: 2,
        name: "Hivesync Docs",
        onClick: () => navigate("/app/documents"),
        icon: IoDocumentText
      },
      {
        id: 3,
        name: "Hivesync Boards",
        onClick: () => navigate("/app/whiteboard"),
        icon: PiPencilCircleLight
      },
      {
        id: 4,
        name: "Hivesync Signs",
        onClick: () => window.location.href = "https://hivesync-signs.vercel.app/",
        icon: PiHandWavingFill
      },
    ];
  };
  