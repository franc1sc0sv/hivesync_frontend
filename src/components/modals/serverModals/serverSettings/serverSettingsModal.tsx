import { ModalTemplate } from "../../ModalTemplate"
import { useModal } from "../../../../store/useModal"

import { PencilIcon } from "../../../Icons/pencil";
import { FaUsersCog } from "react-icons/fa";
import { ShieldIcon } from "../../../Icons/shield";
import { ColorPaletteIcon } from "../../../Icons/colorPalette";
import { PadlockIcon } from "../../../Icons/padlock";
import { DeleteIcon } from "../../../Icons/delete";

import { MenuProps, OptionsTemplateProps } from "../../types/menuProps";


const generalOptions: MenuProps[] = [
    {
        icon: <PencilIcon size={30} color="white" />,
        name: "General",
        modal: "generalSettings",
    },
    {
        icon: <FaUsersCog size={30} color="white" />,
        name: "Roles",
        modal: "rolesSettings",
    },
    {
        icon: <ColorPaletteIcon size={30} color="white" />,
        name: "Apariencia",
        modal: "appearanceSettings",
    },
];

const advancedOptions: MenuProps[] = [
    {
        icon: <ShieldIcon size={30} color="white" />,
        name: "Seguridad",
        modal: "securitySettings",
    },
    {
        icon: <PadlockIcon size={30} color="white" />,
        name: "Privacidad",
        modal: "privacySettings",
    },
    {
        icon: <DeleteIcon size={30} color="white" />,
        name: "Eliminar servidor",
        modal: "deleteServer",
    },
];

export const ServerSettingsModal = () => {
    return (
        <ModalTemplate identificator="serverSettings">
            <div className="lg:w-4/5 mx-auto flex flex-col h-full gap-5">
                <p className="text-2xl text-custom_white">Ajustes generales</p>
                <Settings options={generalOptions} />
                <p className="text-2xl text-custom_white">Ajustes avanzados</p>
                <Settings options={advancedOptions} />
            </div>
        </ModalTemplate>
    )
}

const Settings: React.FC<OptionsTemplateProps> = ({ options }) => {

    const { setModalId } = useModal();

    return (
        <div>
            <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                {options.map((option, index) => (
                    <div
                        className="flex flex-row items-center gap-3"
                        key={index}
                        onClick={() => {
                            setModalId(option.modal);
                        }}
                    >
                        <div>
                            <div className="p-2 text-3xl text-custom_white rounded-xl">
                                {option.icon}
                            </div>
                        </div>
                        <p className="text-custom_white">{option.name}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}