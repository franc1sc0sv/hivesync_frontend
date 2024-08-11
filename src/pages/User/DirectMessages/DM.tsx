import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";

import { AddFriendsButton } from "../../../components/buttons/AddFriendsButton";
import { FriendsPanel } from "./Components/FriendsPanel";
import { Inbox } from "./Components/Inbox";

import { ShowFakePages } from "../../../components/fakePages/ShowFakePages";

import { friends } from "./data";
import { MessageProps } from "./types/Messages";

export const DirectMessagesPage = () => {
  return (
    <GeneralLayout title="Mensajes" RightComponent={AddFriendsButton}>
      <article className="flex flex-col w-full h-full gap-5">
        <FriendsPanel friends={friends as MessageProps[]} />
        <Inbox friends={friends as MessageProps[]} />
      </article>
      <ShowFakePages />
    </GeneralLayout>
  );
};
