import { SearchBar } from "../../../../components/forms/Inputs/SearchBar";
import {
  HiUser,
  HiShieldCheck,
  HiUsers,
  HiOutlineLightBulb,
  HiOutlineLogin,
} from "react-icons/hi";
import { FaPaperclip } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSession } from "../../../../store/user";

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
];

const MenuOptions2: MenuProps[] = [
  { icon: <FaMicrophone />, optionName: "Voz", optionLink: "" },
  { icon: <HiOutlineLightBulb />, optionName: "Voz", optionLink: "" },
];

export const MenuOptions: React.FC = () => {
  const { logout } = useSession();
  return (
    <div className="flex flex-col gap-5 h-[80vh] overflow-y-auto">
      <div className="p-2 my-3">
        <SearchBar placeholder="Buscar opción" />
      </div>

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

      <button
        onClick={logout}
        className="flex items-center justify-center w-full h-12 gap-2 text-lg bg-red-600 rounded-xl font-amiko text-custom_white place-items-center"
      >
        <HiOutlineLogin size={36} />
        <p>Cerrar Sesion</p>
      </button>
    </div>
  );
};
