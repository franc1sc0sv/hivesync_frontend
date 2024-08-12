import { useCustomForm } from "../../../../hooks/useForm";
import { SearchBar } from "../../../forms/Inputs/SearchBar";

import { AddFriendsButton } from "../../../buttons/AddFriendsButton";

import { useModal } from "../../../../store/useModal";
import { ExternalProfileModal } from "../../../modals/generalModals/externalProfileModal";

import { ChatIcon } from "../../../Icons/chat";
import { PhoneIcon } from "../../../Icons/phone";


const temporaryRoute =
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

const friends = [
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

export const UserFriendsFakePage: React.FC = () => {

    return (
        <div className="h-full p-1 flex flex-col gap-5">
            <Header />
            <FriendsList />
        </div>
    )
}

const Header = () => {

    const api = () => console.log("hola, *llama a la api épicamente*");
    const success = () => console.log("success");

    const {onSubmit, register} = useCustomForm(api, success, "");

    return (
        <div className="flex flex-row justify-between items-center gap-5">
            <form onSubmit={onSubmit}>
                <SearchBar 
                register={register}
                name="friend"
                placeholder="Buscar" />
            </form>
            <AddFriendsButton />
        </div>
    )
}

const FriendsList: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="h-4/5 overflow-y-auto">
            {friends.map((friend, index) => (
                <div
                    onClick={() => setModalId("externalProfile")}
                    key={index}
                    className="flex flex-row items-center justify-between p-3 my-2 rounded-xl bg-overlay_2">

                    <div className="flex flex-row items-center gap-5 rounded-2xl">
                        <img
                            className="object-cover object-center w-14 h-14 rounded-full"
                            src={friend.picture}
                            alt="Profile picture"
                        />
                        <p className="text-xl text-custom_white font-almarai">{friend.username}</p>
                    </div>

                    <div className="flex flex-row gap-5">
                        <ChatIcon size={30} color="white" />
                        <PhoneIcon size={25} color="white" />
                    </div>
                </div>
            ))}

            <ExternalProfileModal />
        </div>


    )
}