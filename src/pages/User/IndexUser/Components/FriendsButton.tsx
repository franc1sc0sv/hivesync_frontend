import { HiUserAdd } from "react-icons/hi";
import { useModal } from "../../../../store/useModal";
import { AddFriendsModal } from "../../../../components/modals/userModals/addFriendsModal";

export const FriendsButton = () => {

  const {setModalId } = useModal()

  return (
    <div>
      <div className="flex flex-row items-center justify-end gap-2 md:hidden lg:hidden sm:h-1/4 bg-overlay_1" onClick={() => setModalId("addFriends")}>
        <HiUserAdd className="text-3xl text-custom_white" />
        <h2 className="text-custom_white text-md">Añadir amigos</h2>
      </div>

      <AddFriendsModal />
    </div>

  );
};
