import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";


interface EditOptionProps {
    title: string,
    option: boolean
}

export const EditProfileOption: React.FC<EditOptionProps> = ({ title, option }) => {
    return (
        <>
            <div className="w-max bg-overlay_2 py-2 px-5 border border-white items-center gap-3 text-custom_white rounded-3xl flex justify-center" >
                {option ? <HiChatBubbleLeftRight className="text-2xl" /> : <HiPencil className="text-2xl" />}
                <p className="text-md">{title}</p>
            </div>
        </>
    )
}