import { HiUserAdd } from "react-icons/hi";

import useFakePages from "../../../../store/useFakePage";
import { AddFriendsFakePage } from "../../../../fakePages/user/AddFriendsFakePage";
import { ShowFakePages } from "../../../../fakePages/ShowFakePages";

export const FriendsButton = () => {

  const { addFakePage } = useFakePages()

  return (
    <div>
      <button
        onClick={() => addFakePage({ title: "Añadir amigos", children: <AddFriendsFakePage /> })}
        className="flex flex-row items-center justify-end gap-2 sm:h-1/4 bg-overlay_1"
      >
        <HiUserAdd size={30} fill="white" />
        <h2 className="text-custom_white text-md">Añadir amigos</h2>
      </button>
      <ShowFakePages />
    </div>
  );
};
