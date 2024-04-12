import { IconProps } from "../../../../components/layout/user/userStatusIcon";

interface MessageProps extends IconProps {
  username: string;
  messagePreview: string;
  timeAgo: string;
}
