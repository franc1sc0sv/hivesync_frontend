import useFakePages from "../../../../store/useFakePage";
import { RightTriangleIcon } from "../../../Icons/rightTriangle";

interface MenuProps {
    name: string;
    // page: React.ReactNode;
}

const options: MenuProps[] = [
    {
        name: "Modificar color del tema",
        // page: <AccountSettingsFakePage />
    },
    {
        name: "Transiciones al navegar por HiveSync",
        // page: <PrivacySettingsFakePage />
    }
];

export const AppearanceSettingsFakePage: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 p-3 overflow-y-auto">
            {/* account options */}
            <Options />
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