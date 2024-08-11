import { IconProps } from "../../../../components/Icons/userStatusIcon";

interface MessageProps extends IconProps {
  username: string;
  messagePreview: string;
  timeAgo: string;
}
