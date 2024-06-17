import { UserAddIcon } from "../../../../components/Icons/userAdd";

import useFakePages from "../../../../store/useFakePage";
import { AddFriendsFakePage } from "../../../../components/fakePages/user/friends/AddFriendsFakePage";
import { ShowFakePages } from "../../../../components/fakePages/ShowFakePages";

export const FriendsButton = () => {

  const { addFakePage } = useFakePages()

  return (
    <div>
      <button
        onClick={() => addFakePage({ title: "Añadir amigos", children: <AddFriendsFakePage /> })}
        className="flex flex-row items-center justify-end gap-2 sm:h-1/4 bg-overlay_1"
      >
        <UserAddIcon size={30} color="white" />
        <h2 className="text-custom_white text-md">Añadir amigos</h2>
      </button>
      {/* <ShowFakePages /> */}
    </div>
  );
};
