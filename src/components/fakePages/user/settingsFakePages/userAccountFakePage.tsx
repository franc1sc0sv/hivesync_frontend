import useFakePages from "../../../../store/useFakePage";
import { RightTriangleIcon } from "../../../Icons/rightTriangle";

interface MenuProps {
    name: string;
    // page: React.ReactNode;
}

const options: MenuProps[] = [
    {
        name: "Nombre de usuario",
        // page: <AccountSettingsFakePage />
    },
    {
        name: "Nombre a mostrar",
        // page: <PrivacySettingsFakePage />
    },
    // { icon: <HiUsers />, optionName: "Solicitudes de amistad", optionLink: "" },
    {
        name: "Correo electrónico",
        // page: <ConnectionsSettingsFakePage />
    },
    {
        name: "Teléfono",
        // page: <ConnectionsSettingsFakePage />
    },
    {
        name: "Contraseña",
        // page: <ConnectionsSettingsFakePage />
    },
];

export const AccountSettingsFakePage: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 p-3 overflow-y-auto">
            {/* account options */}
            <Options />

            <div className="h-3/5 w-full flex items-end">
                <button
                    className="flex items-center justify-center w-full gap-2 p-3 mb-14 text-lg bg-red-600 rounded-xl font-amiko text-custom_white place-items-center"
                >
                    <p>Eliminar cuenta</p>
                </button>
            </div>

        </div>
    )
}

const Options: React.FC = () => {

    const { addFakePage } = useFakePages();

    return (
        <div className="flex flex-col gap-5 p-3 bg-overlay_2 rounded-xl">
            {options.map((option, index) => (
                <button
                    className="flex flex-row justify-between items-center gap-3"
                    key={index}
                >
                    <p className="text-lg text-custom_white">{option.name}</p>
                    <RightTriangleIcon size={20} color="white" />
                </button>
            ))}
        </div>
    )
}