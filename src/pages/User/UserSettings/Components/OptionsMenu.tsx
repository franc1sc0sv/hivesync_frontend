import { SearchBar } from "../../../../components/forms/Inputs/SearchBar";
import { HiUser, HiShieldCheck, HiUsers, HiOutlineLightBulb } from "react-icons/hi";
import { FaPaperclip } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MenuProps {
    icon: React.ReactNode;
    optionName: string;
    optionLink: string;
  }

const MenuOptions1: MenuProps[] = [
    { icon: <HiUser />, optionName: "Cuenta", optionLink: "" },
    { icon: <HiShieldCheck />, optionName: "Privacidad", optionLink: "" },
    { icon: <HiUsers />, optionName: "Solicitudes de amistad", optionLink: "" },
    { icon: <FaPaperclip />, optionName: "Conexiones", optionLink: "" },
]

const MenuOptions2: MenuProps[] = [
    { icon: <FaMicrophone />, optionName: "Voz", optionLink: "" },
    { icon: <HiOutlineLightBulb />, optionName: "Voz", optionLink: "" }
]


export const MenuOptions: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 h-[80vh] overflow-y-auto">

            <div className="my-3 p-2">
                <SearchBar placeholder="Buscar opción" />
            </div>

            {/* account options */}
            <div>
                <h1 className="text-custom_white text-2xl my-2">Mi cuenta</h1>

                <div className="bg-overlay_2 p-3 flex flex-col gap-3 rounded-xl">
                    {MenuOptions1.map((option, index) => (
                        <Link to={option.optionLink} className="flex flex-row items-center gap-3" key={index}>
                        <div>
                                <div className="p-2 bg-gray text-custom_white text-3xl rounded-xl">{option.icon}</div>
                            </div>
                            <p className="text-custom_white">{option.optionName}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* style and connections */}
            <div>
                <h1 className="text-custom_white text-2xl my-2 rounded-xl">Conexión y estilos</h1>

                <div className="bg-overlay_2 p-3 flex flex-col gap-3">
                    {MenuOptions2.map((option, index) => (
                        <Link to={option.optionLink} className="flex flex-row items-center gap-3" key={index}>
                            <div>
                                <div className="p-2 bg-gray text-custom_white text-3xl rounded-xl">{option.icon}</div>
                            </div>
                            <p className="text-custom_white">{option.optionName}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}