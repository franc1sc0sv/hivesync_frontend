import { ModalTemplate } from "../../ModalTemplate"

import { UserAddIcon } from "../../../Icons/userAdd"
import { ChatIcon } from "../../../Icons/chat"
import { PhoneIcon } from "../../../Icons/phone"


import { useCustomForm } from "../../../../hooks/useForm"
import { SearchBar } from "../../../forms/Inputs/SearchBar"

const temporaryRoute =
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

const members = [
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute },
    { username: "arsene_lupin", picture: temporaryRoute }
]

export const MembersListModal: React.FC = () => {
    return (
        <ModalTemplate identificator="membersList">
            <MembersList />
        </ModalTemplate>
    )
}

const MembersList: React.FC = () => {
    return (
        <div className="h-full p-1 flex flex-col gap-5">
            <Header />
            <List />
        </div>
    )
}

const Header: React.FC = () => {

    const api = () => console.log("hola, *llama a la api épicamente*");
    const success = () => console.log("success");

    const { onSubmit, register } = useCustomForm(api, success, "");

    return (
        <div className="w-full flex flex-row justify-between items-center gap-5">
            <form 
            className="w-1/2"
            onSubmit={onSubmit}>
                <SearchBar
                    register={register}
                    name="member"
                    placeholder="Buscar" />
            </form>

            <div className="w-1/2">
                <button
                    className="flex flex-row flex-wrap items-center justify-center mx-auto gap-2 sm:h-1/4 bg-overlay_1"
                >
                    <UserAddIcon size={30} color="white" />
                    <h2 className="text-custom_white text-md">Añadir miembros</h2>
                </button>
            </div>
        </div>
    )
}

const List: React.FC = () => {
    return (
        <div className="h-4/5 overflow-y-auto">
            {members.map((member, index) => (
                <div
                    // onClick={() => setModalId("externalProfile")}
                    key={index}
                    className="flex flex-row items-center justify-between p-3 my-2 rounded-xl bg-overlay_2">

                    <div className="flex flex-row items-center gap-5 rounded-2xl">
                        <img
                            className="object-cover object-center w-14 h-14 rounded-full"
                            src={member.picture}
                            alt="Profile picture"
                        />
                        <p className="text-xl text-custom_white font-almarai">{member.username}</p>
                    </div>

                    <div className="flex flex-row gap-5">
                        <ChatIcon size={30} color="white" />
                        <PhoneIcon size={25} color="white" />
                    </div>
                </div>
            ))}

        </div>
    )
}