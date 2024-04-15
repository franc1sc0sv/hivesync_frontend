import { NavLink } from "react-router-dom";

import { UserStatusIcon } from "../../../Icons/userStatusIcon";
import {
  Links,
  PropsLinks,
  PropsLinksNav,
  PropsProfilePicture,
} from "../types/GeneralLayout";
import { Link } from "react-router-dom";

export const NavBar: React.FC<PropsLinksNav> = ({ links, profilePicture }) => {
  return (
    <nav className="flex flex-row items-center self-end justify-around w-full h-20 max-w-sm p-2 m-auto transform bottom-4 rounded-overlay md:hidden lg:hidden bg-overlay_2">
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

const UserProfile: React.FC<PropsProfilePicture> = ({ pictureRoute, url }) => {
  return (
    <Link to={url} className="flex flex-shrink-0">
      <UserStatusIcon pictureRoute={pictureRoute} isActive={true} />
    </Link>
  );
};
