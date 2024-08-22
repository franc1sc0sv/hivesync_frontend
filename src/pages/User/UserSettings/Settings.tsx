import { HiOutlineLogin } from "react-icons/hi";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { useSession } from "../../../store/user";
import { MenuOptions } from "./Components/OptionsMenu";
import { ShowFakePages } from "../../../components/fakePages/ShowFakePages";

export const SettingsPage: React.FC = () => {
  const { logout } = useSession();

  return (
    <GeneralLayout title="Ajustes">
      <MenuOptions />
      <button
        onClick={logout}
        className="w-full lg:w-4/5 mx-auto flex items-center justify-center gap-2 py-3 text-lg bg-red-600 rounded-xl font-amiko text-custom_white place-items-center"
      >
        <HiOutlineLogin size={36} />
        <p>Cerrar Sesión</p>
      </button>
      <ShowFakePages />
    </GeneralLayout>
  );
};