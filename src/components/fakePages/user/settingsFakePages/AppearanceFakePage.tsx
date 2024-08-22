import { RightTriangleIcon } from "../../../Icons/rightTriangle";
import { EditAppearanceModals } from "../../../modals/userModals/settings/appearance/modals";
import { EditTransitionModal } from "../../../modals/userModals/settings/appearance/transition";
import { useModal } from "../../../../store/useModal";

interface MenuProps {
    name: string;
    modalId: string
}

const options: MenuProps[] = [
    {
        name: "Modificar color del tema de la portada",
        modalId: "editCoverTheme"
    },
    {
        name: "Transición al navegar por HiveSync",
        modalId: "editTransition"
    }
];

export const AppearanceSettingsFakePage: React.FC = () => {
    return (
        <div className="w-full lg:w-3/5 h-full flex flex-col gap-5 p-3 overflow-y-auto">
            {/* account options */}
            <Options />
            <EditAppearanceModals />
            <EditTransitionModal />
        </div>
    )
}

const Options: React.FC = () => {

    const {setModalId} = useModal();

    return (
        <div className="flex flex-col gap-5 p-3 bg-overlay_2 rounded-xl">
            {options.map((option, index) => (
                <button
                onClick={() => setModalId(option.modalId)}
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