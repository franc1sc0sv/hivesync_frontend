import { RightTriangleIcon } from "../../../Icons/rightTriangle";

import { useModal } from "../../../../store/useModal";
import { AccountSettingsModals } from "../../../modals/userModals/settings/accountSettings/modals";
import { DeleteIcon } from "../../../../components/Icons/delete";


export interface MenuProps {
    name: string;
    modal: string;
}

const options: MenuProps[] = [
    {
        name: "Nombre de usuario",
        modal: "editUsername"
    },
    {
        name: "Tu nombre",
        modal: "editName"
    },
    {
        name: "Correo electrónico",
        modal: "editMail"
    },
    {
        name: "Contraseña",
        modal: "editPassword"
    },
];

export const AccountSettingsFakePage: React.FC = () => {
    return (
        <div className="w-full sm:w-4/5 lg:w-4/5 h-full flex flex-col justify-between gap-5 p-3 overflow-y-auto">
            {/* account options */}
            <Options />
            <div className="h-3/5 w-full flex flex-row items-end">
                <button
                    className="flex items-center justify-center w-full gap-2 p-3 mb-14 text-lg bg-red-600 rounded-xl font-amiko text-custom_white place-items-center"
                >
                    <DeleteIcon size={40} color="#fff" />
                    <p>Eliminar cuenta</p>
                </button>
            </div>
            <AccountSettingsModals />
        </div>
    )
}

const Options: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-5 p-3 bg-overlay_2 rounded-xl">
            {options.map((option, index) => (
                <button
                    onClick={() => setModalId(option.modal)}
                    className="flex flex-row justify-between items-center gap-3 text-lg text-custom_white hover:text-light_purple transition-all duration-200"
                    key={index}
                >
                    {option.name}   
                    <RightTriangleIcon size={20} color="white" />
                </button>
            ))}
        </div>
    )
}