import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";

//la fake page se encuentra en friends button
import { FriendsButton } from "./Components/FriendsButton";
import { FriendsPanel } from "./Components/FriendsPanel";
import { Inbox } from "./Components/Inbox";

import { friends } from "./data";
import { MessageProps } from "./types/Messages";

import useFakePages from "../../../store/useFakePage";
import FakePageTemplate from "../../../fakePages/FakePageTemplate";

export const IndexUserPage = () => {

  const { fakePages, removeFakePage } = useFakePages()

  return (
    <GeneralLayout title="Mensajes" RightComponent={FriendsButton}>
      <article className="flex flex-col w-full h-full gap-5">
        <FriendsPanel friends={friends as MessageProps[]} />
        <Inbox friends={friends as MessageProps[]} />
      </article>

      {
        fakePages.map((page) => (
          <FakePageTemplate
            key={page.id}
            isOpen={true}
            onClose={() => removeFakePage(page.id)}
            index={page.id}
            title={page.title}
            children={page.children}
          />
        ))
      }
    </GeneralLayout>


  );
};
