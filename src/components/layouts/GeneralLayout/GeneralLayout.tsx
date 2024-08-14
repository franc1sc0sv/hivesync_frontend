import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/UserHeader";
import { HiUserGroup } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiMiniBell } from "react-icons/hi2";

import { ArrayLinks, PropsProfilePicture } from "./types/GeneralLayout";

//mock
import { userData } from "../../../pages/User/mocks/userData";

const links: ArrayLinks = [
  {
    Icon: HiUserGroup,
    url: "/app/d853c1ef-e3b6-4f04-942d-62226325536a/d853c1ef-e3b6-4f04-942d-62226325536a",
  },
  {
    Icon: HiChatBubbleLeftRight,
    url: "/app/@me",
  },
  {
    Icon: HiMiniBell,
    url: "/app/@notifications",
  },
];

const profilePicture: PropsProfilePicture = {
  pictureRoute: userData.picture,
  url: "/app/profile/agaw1-qffq3135-af3451",
};

type PropsGeneralLayout = {
  title?: string;
  RightComponent?: React.FC;
  showHeader?: boolean;
  children?: React.ReactNode;
};

export const GeneralLayout: React.FC<PropsGeneralLayout> = ({
  title = "Mensajes",
  RightComponent = () => <></>,
  children,
  showHeader = true,
}) => {
  return (
    <main className="flex flex-col w-full overflow-hidden max-h-screen gap-4 p-5 bg-overlay_1">
      <section className="screen_overlay w-full flex flex-col gap-5">
        {showHeader && <Header title={title} RightComponent={RightComponent} />}
        {children}
      </section>
      <NavBar links={links} profilePicture={profilePicture} />
    </main>
  );
};
