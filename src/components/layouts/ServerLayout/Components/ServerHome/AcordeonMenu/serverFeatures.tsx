import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { GoDependabot } from "react-icons/go";
import { IoDocumentText } from "react-icons/io5";
import { PiPencilCircleLight } from "react-icons/pi";
import { PiHandWavingFill } from "react-icons/pi";
import useFakePages from "../../../../../../store/useFakePage";
import { AIPage } from "../../../../../../pages/User/Tools/AIPage";
import { MdOutlineTranslate } from "react-icons/md";


interface ChannelProps {
  id: string | number;
  name: string;
  onClick: () => void;
  icon: IconType;
}

export const features = (): ChannelProps[] => { 
  const {addFakePage} = useFakePages()
    const navigate = useNavigate();
  
    return [
      {
        id: 1,
        name: "Hivesync X ChatGPT",
        onClick: () => {
          addFakePage({
            title:<HeaderIA/>,
            children: <AIPage />,
          })
        },
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
        name: "Hivesync Translator",
        onClick: () => navigate("/app/translate"),
        icon: MdOutlineTranslate
      },
      {
        id: 5,
        name: "Hivesync Signs",
        onClick: () => window.location.href = "https://hivesync-signs.vercel.app/",
        icon: PiHandWavingFill
      },
    ];
  };
  

  
//vale wea acá los voy a dejar
const HeaderIA: React.FC = () => (
  <div className="bg-[#28242C] p-4 flex items-center justify-between shadow-md w-full">
  <div className="flex items-center">
    <GoDependabot className="w-8 h-8 text-light_purple mr-2" />
    <h1 className="text-xl font-bold text-white">ChatGPT</h1>
  </div>
  <div className="bg-[#28242C] px-3 py-1 rounded-full text-sm text-gray-300">
    En línea
  </div>
</div>
);