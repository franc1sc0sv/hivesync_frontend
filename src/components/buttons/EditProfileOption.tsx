import { HiChatBubbleLeftRight} from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";


interface EditOptionProps {
    title: string,
    option: boolean
}

export const EditProfileOption: React.FC<EditOptionProps> = ({title, option}) => {
    return (
        <>
            <div className="w-full bg-overlay_2 border border-white flex flex-row items-center gap-3 p-3 text-custom_white rounded-3xl " >
                {option ? <HiChatBubbleLeftRight className="text-2xl"  /> : <HiPencil className="text-2xl"  />}

                <p className="text-md">{title}</p>
            </div>
        </>
    )
}