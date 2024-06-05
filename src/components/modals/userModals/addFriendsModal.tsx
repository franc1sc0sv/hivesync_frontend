import { ModalTemplate } from "../ModalTemplate";
import { CardFriends } from "../../../pages/User/Chat/Components/RightComponent";
import { SearchBar } from "../../forms/Inputs/SearchBar";

export const AddFriendsModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addFriends">
            <AddFriends />
        </ModalTemplate>
    );
}


const AddFriends: React.FC = () => {
    return (
        <section className="flex flex-col gap-10 my-10 w-full h-full">
            <CardFriends />
            <SearchBar placeholder="Busca por nombre de usuario" />
        </section>
    );
};
