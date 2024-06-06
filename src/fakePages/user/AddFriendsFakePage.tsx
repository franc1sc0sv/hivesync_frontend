import { CardFriends } from "../../pages/User/Chat/Components/RightComponent"
import { SearchBar } from "../../components/forms/Inputs/SearchBar"
import { SubmitButton } from "../../components/forms/Inputs/Button"

import { useModal } from "../../store/useModal"
import { InviteByLinkModal } from "../../components/modals/userModals/inviteFriendsByLink"

export const AddFriendsFakePage: React.FC = () => {

    const {setModalId} = useModal()

    return (
        <div className="h-full p-4">
            <form className="w-full h-[20%] flex flex-col gap-10 p-4">
                <CardFriends />
                <SearchBar placeholder="Busca un nombre de usuario" />
            </form>

            <div className="w-full h-[70%] flex flex-col items-end justify-end ">

                <SubmitButton text="Enviar solicitud de amistad" isLoading={false} />

                <button onClick={() => setModalId("inviteByLink")} className="flex h-14 w-full max-w-[320px] p-3 font-bold rounded-xl text-custom_white font-almarai mx-auto">Inviar por medio de link</button>
            </div>

            <InviteByLinkModal />
        </div>

    )
}