import { SearchBar } from "../../../../components/forms/Inputs/SearchBar";
import {
  HiUser,
  HiShieldCheck,
  HiUsers,
  HiOutlineLightBulb,
} from "react-icons/hi";
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
  // { icon: <HiUsers />, optionName: "Solicitudes de amistad", optionLink: "" },
  { icon: <FaPaperclip />, optionName: "Conexiones", optionLink: "" },
];

const MenuOptions2: MenuProps[] = [
  { icon: <FaMicrophone />, optionName: "Voz", optionLink: "" },
  // { icon: <HiOutlineLightBulb />, optionName: "Voz", optionLink: "" },
];

export const MenuOptions: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 h-[80vh] overflow-y-auto">
      <SearchBar placeholder="Buscar opción" />

      {/* account options */}
      <div>
        <h1 className="my-2 text-2xl text-custom_white">Mi cuenta</h1>

        <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
          {MenuOptions1.map((option, index) => (
            <Link
              to={option.optionLink}
              className="flex flex-row items-center gap-3"
              key={index}
            >
              <div>
                <div className="p-2 text-3xl bg-gray text-custom_white rounded-xl">
                  {option.icon}
                </div>
              </div>
              <p className="text-custom_white">{option.optionName}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* style and connections */}
      <div>
        <h1 className="my-2 text-2xl text-custom_white rounded-xl">
          Conexión y estilos
        </h1>

        <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
          {MenuOptions2.map((option, index) => (
            <Link
              to={option.optionLink}
              className="flex flex-row items-center gap-3"
              key={index}
            >
              <div>
                <div className="p-2 text-3xl bg-gray text-custom_white rounded-xl">
                  {option.icon}
                </div>
              </div>
              <p className="text-custom_white">{option.optionName}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
