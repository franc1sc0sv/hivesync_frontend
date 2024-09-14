import { ExitIcon } from "../../../components/Icons/exit";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { useSession } from "../../../store/user";
import { MenuOptions } from "./Components/OptionsMenu";
import { OptionsProvider } from "./context/optionsContext";
import { UserSettingsModals } from "../../../components/modals/userModals/settings/UserSettingsModals";

export const SettingsPage: React.FC = () => {
  const { logout } = useSession();

  return (
    <GeneralLayout title="Ajustes">
      <div className="h-full md:h-[85%] flex flex-col justify-between gap-y-3">
        <div className="h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-between overflow-y-auto">
          <OptionsProvider>
            <MenuOptions />
          </OptionsProvider>
        </div>
        <button
          onClick={logout}
          className="w-[95%] md:w-1/3 mx-auto md:m-0 flex items-center justify-center gap-2 py-3 text-lg bg-red-600 rounded-xl font-amiko text-custom_white place-items-center"
        >
          <ExitIcon size={36} color="#fff" />
          <p>Cerrar Sesión</p>
        </button>
      </div>
      <UserSettingsModals />
    </GeneralLayout>
  );
};