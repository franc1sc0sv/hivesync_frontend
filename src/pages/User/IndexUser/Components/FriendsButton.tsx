import { HiUserAdd } from "react-icons/hi";


import useFakePages from "../../../../store/useFakePage";
import { AddFriendsFakePage } from "../../../../fakePages/user/AddFriendsFakePage";
import FakePageTemplate from "../../../../fakePages/FakePageTemplate";

export const FriendsButton = () => {

  const { addFakePage} = useFakePages()

  return (
    <div onClick={() => addFakePage({ title: "Agregar amigos", children: <AddFriendsFakePage /> })}>
      <div
        className="flex flex-row items-center justify-end gap-2 md:hidden lg:hidden sm:h-1/4 bg-overlay_1"
      >
        <HiUserAdd className="text-3xl text-custom_white" />
        <h2 className="text-custom_white text-md">Añadir amigos</h2>
      </div>
    </div>
  );
};
