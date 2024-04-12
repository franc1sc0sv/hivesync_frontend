import { IconType } from "react-icons";

type Links = {
  Icon: IconType;
  url: string;
};

type ArrayLinks = Links[];

type PropsProfilePicture = {
  pictureRoute: string;
  url: string;
};

interface PropsLinks {
  links: ArrayLinks;
}

interface PropsLinksNav extends PropsLinks {
  profilePicture: PropsProfilePicture;
}
