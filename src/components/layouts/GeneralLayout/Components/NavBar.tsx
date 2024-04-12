import { Link } from "react-router-dom";

import { UserStatusIcon } from "../../../Icons/userStatusIcon";
import {
  Links,
  PropsLinks,
  PropsLinksNav,
  PropsProfilePicture,
} from "../types/GeneralLayout";

export const NavBar: React.FC<PropsLinksNav> = ({ links, profilePicture }) => {
  return (
    <nav className="flex flex-row items-center justify-around w-full max-w-sm p-2 transform bottom-4 rounded-3xl md:hidden lg:hidden bg-overlay_2">
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
    <Link to={`${url}`}>
      <Icon size={40} className="text-3xl text-custom_white" />
    </Link>
  );
};

const UserProfile: React.FC<PropsProfilePicture> = ({ pictureRoute, url }) => {
  return (
    <Link to={url} className="flex flex-shrink-0">
      <UserStatusIcon pictureRoute={pictureRoute} isActive={true} />
    </Link>
  );
};
