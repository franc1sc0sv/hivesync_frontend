import { Notifications } from "../../../Alerts/Notification";
import { RightTriangleIcon } from "../../../Icons/rightTriangle";

import { useModal } from "../../../../store/useModal";

import { MenuProps } from "./userAccountFakePage";
import { PrivacityModals } from "../../../modals/userModals/settings/accountSettings/privacity/PrivacityModals";


const PrivacityOptions: MenuProps[] = [
    {
        name: "Micrófono",
        modal: "toggleMicro"
    }
];



export const PrivacySettingsFakePage: React.FC = () => {
    return (
        <div className="w-full sm:w-4/5 lg:w-3/5 h-full flex flex-col justify-between gap-5 p-3 overflow-y-auto">
            {/* Privacity Options*/}
            <Options/>
            <PrivacityModals/>
        </div>
    )
}

const Options: React.FC = () => {
    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-5 p-3 bg-overlay_2 rounded-xl">
            {PrivacityOptions.map((option, index) => (
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