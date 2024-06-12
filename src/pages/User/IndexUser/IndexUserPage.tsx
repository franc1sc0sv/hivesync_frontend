import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";

import { FriendsButton } from "./Components/FriendsButton";
import { FriendsPanel } from "./Components/FriendsPanel";
import { Inbox } from "./Components/Inbox";

import { friends } from "./data";
import { MessageProps } from "./types/Messages";

export const IndexUserPage = () => {
  return (
    <GeneralLayout title="Mensajes" RightComponent={FriendsButton}>
      <article className="flex flex-col w-full h-full gap-5">
        <FriendsPanel friends={friends as MessageProps[]} />
        <Inbox friends={friends as MessageProps[]} />
      </article>
    </GeneralLayout>
  );
};
