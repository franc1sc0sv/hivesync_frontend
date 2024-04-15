import { GeneralLayout } from "../../components/layouts/GeneralLayout/GeneralLayout";
import { MenuOptions } from "./Components/OptionsMenu";

export const SettingsPage: React.FC = () => {
    return(
        <GeneralLayout title="Ajustes">
                <MenuOptions />
        </GeneralLayout>
    );
}