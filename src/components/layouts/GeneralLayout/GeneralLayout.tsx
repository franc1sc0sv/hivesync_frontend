import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/UserHeader";
import { HiUserGroup } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiMiniBell } from "react-icons/hi2";

import { ArrayLinks, PropsProfilePicture } from "./types/GeneralLayout";

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
  pictureRoute:
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
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
    <main className="flex flex-col w-full h-screen gap-4 p-5 overflow-hidden bg-overlay_1 justify-between">
      {showHeader && <Header title={title} RightComponent={RightComponent} />}
      {children}
      <NavBar links={links} profilePicture={profilePicture} />
    </main>
  );
};
