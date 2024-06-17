import { MdOutlineIosShare } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa6";

import { SearchBar } from "../../../forms/Inputs/SearchBar";
import { SubmitButton } from "../../../forms/Inputs/Button";

import { InviteByLinkModal } from "../../../modals/userModals/profile/inviteFriendsByLink";

export const AddFriendsFakePage: React.FC = () => {

    return (
        <div className="h-full w-full">
            <ShareLinkButtons />
            <Form />
            <InviteByLinkModal />
        </div>

    )
}

const ShareLinkButtons: React.FC = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center gap-5 mt-2">
            <button className="flex flex-col items-center sm:h-1/4 gap-2">
                <div className="rounded-full bg-overlay_2 p-4">
                    <MdOutlineIosShare size={25} fill="white" />
                </div>
                <h2 className="text-custom_white text-md">Compartir invitación</h2>
            </button>

            <button className="flex flex-col items-center sm:h-1/4 gap-2">
                <div className="rounded-full bg-overlay_2 p-4">
                    <FaPaperclip size={25} fill="white" />
                </div>
                <h2 className="text-custom_white text-md">Copiar link de invitación</h2>
            </button>


        </div>
    )
}

const Form: React.FC = () => {
    return (
        <form className="w-full h-4/5 flex flex-col justify-evenly  gap-10">
            <div className="flex flex-row items-center p-5 gap-2">
                <SearchBar placeholder="Busca un nombre de usuario" />
            </div>

            <div className="w-full h-full md:p-0 py-10 flex flex-col items-end justify-end ">
                <SubmitButton text="Enviar solicitud de amistad" isLoading={false} />
            </div>
        </form>
    )
}