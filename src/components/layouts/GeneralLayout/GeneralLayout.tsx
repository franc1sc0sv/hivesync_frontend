import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/UserHeader";
import { HiUserGroup } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiMiniBell } from "react-icons/hi2";

import { ArrayLinks, PropsProfilePicture } from "./types/GeneralLayout";

const links: ArrayLinks = [
  {
    Icon: HiUserGroup,
    url: "/app/",
  },
  {
    Icon: HiChatBubbleLeftRight,
    url: "/app/",
  },
  {
    Icon: HiMiniBell,
    url: "/app/",
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
  showHeader?: boolean
  children?: React.ReactNode;
};

export const GeneralLayout: React.FC<PropsGeneralLayout> = ({
  title = "Mensajes",
  RightComponent = () => <></>,
  children,
  showHeader = true
}) => {
  return (
    <main className="flex gap-4 flex-col w-full justify-around h-screen p-5 bg-overlay_1">
      {showHeader && <Header title={title} RightComponent={RightComponent} />}
      {children}
      <NavBar links={links} profilePicture={profilePicture} />
    </main>
  );
};
