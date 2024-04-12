import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/UserHeader";
import { HiUserGroup } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiMiniBell } from "react-icons/hi2";

import { ArrayLinks, PropsProfilePicture } from "./types/GeneralLayout";

const links: ArrayLinks = [
  {
    Icon: HiUserGroup,
    url: "/app/testing",
  },
  {
    Icon: HiChatBubbleLeftRight,
    url: "/app/testing",
  },
  {
    Icon: HiMiniBell,
    url: "/app/testing",
  },
];

const profilePicture: PropsProfilePicture = {
  pictureRoute:
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
  url: "/app/testing",
};

type PropsGeneralLayout = {
  title: string;
  RightComponent: React.FC;
  children?: React.ReactNode;
};

export const GeneralLayout: React.FC<PropsGeneralLayout> = ({
  title = "Mensajes",
  RightComponent = () => <></>,
  children,
}) => {
  return (
    <main className="flex flex-col w-full h-screen p-5 bg-overlay_1">
      <Header title={title} RightComponent={RightComponent} />
      {children}
      <NavBar links={links} profilePicture={profilePicture} />
    </main>
  );
};
