import { SearchBar } from "../../components/forms/Inputs/SearchBar";

import { useModal } from "../../store/useModal";
import { ExternalProfileModal } from "../../components/modals/generalModals/externalProfileModal";

import useFakePages from "../../store/useFakePage";
import { AddFriendsFakePage } from "./AddFriendsFakePage";

import { HiUserAdd } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";


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
    const { addFakePage } = useFakePages();
    return (
        <div className="flex flex-row justify-between items-center gap-5">
            <form>
                <SearchBar placeholder="Buscar" />
            </form>

            <button
                onClick={() => addFakePage({
                    title: "Añadir amigos", 
                    children: <AddFriendsFakePage />
                })}
                className="flex flex-row items-center justify-end gap-2 sm:h-1/4 bg-overlay_1"
            >
                <HiUserAdd size={30} fill="white" />
                <h2 className="text-custom_white text-md">Añadir amigos</h2>
            </button>
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
                        <HiChatBubbleLeftRight size={30} fill="white" />
                        <FaPhone size={25} fill="white" />
                    </div>
                </div>
            ))}

            <ExternalProfileModal />
        </div>


    )
}