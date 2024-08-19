import { NavLink } from "react-router-dom";

import {
  Links,
  PropsLinks,
  PropsLinksNav,
  PropsProfilePicture,
} from "../types/GeneralLayout";
import { Link } from "react-router-dom";
import { UserAvatar } from "../../../Avatars/UserAvatar";

export const NavBar: React.FC<PropsLinksNav> = ({ links, profilePicture }) => {
  return (
    <nav className="flex flex-row items-center justify-around w-full max-w-sm py-3 mx-auto rounded-overlay bg-overlay_2">
      <LinksNav links={links} />
      <UserProfile
        pictureRoute={profilePicture.pictureRoute}
        url={profilePicture.url}
      />
    </nav>
  );
};

const LinksNav: React.FC<PropsLinks> = ({ links }) => {
  return links.map((link, i) => {
    return <LinkNavBar key={i} Icon={link.Icon} url={link.url} />;
  });
};

const LinkNavBar: React.FC<Links> = ({ Icon, url }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? " text-white" : "text-gray")}
      to={`${url}`}
    >
      <Icon size={40} className="text-3xl " />
    </NavLink>
  );
};

const UserProfile: React.FC<PropsProfilePicture> = ({ url }) => {
  return (
    <Link to={url} className="flex flex-shrink-0">
      <UserAvatar w={3} h={3} fontSize={2} />
    </Link>
  );
};
