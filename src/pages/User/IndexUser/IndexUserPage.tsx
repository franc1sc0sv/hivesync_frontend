import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";

import { FriendsButton } from "./Components/FriendsButton";
import { FriendsPanel } from "./Components/FriendsPanel";
import { Inbox } from "./Components/Inbox";

import { friends } from "./data";

export const IndexUserPage = () => {
  return (
    <GeneralLayout title="Mensajes" RightComponent={FriendsButton}>
      <FriendsPanel friends={friends} />
      <Inbox friends={friends} />
    </GeneralLayout>
  );
};
