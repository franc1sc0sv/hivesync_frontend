import { ModalTemplate } from "../ModalTemplate";
import { AddFriendsPage } from "../../../pages/User/Chat/addFriends";

export const AddFriendsModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addFriends">
            <AddFriendsPage />
        </ModalTemplate>
    );
}