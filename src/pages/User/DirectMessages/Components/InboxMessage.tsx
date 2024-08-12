import { UserStatusIcon } from "../../../../components/Icons/userStatusIcon";
import { Link } from "react-router-dom";
import { IconProps } from "../../../../components/Icons/userStatusIcon";

interface UserProps extends IconProps {
  username: string;
  messagePreview: string;
  timeAgo: string;
}

export const InboxMessage: React.FC<UserProps> = ({
  pictureRoute,
  isActive,
  username,
  messagePreview,
  timeAgo,
}) => {

  const id = "d853c1ef-e3b6-4f04-942d-62226325536a";

  return (
    <Link
      to={`/app/${id}`}
      className="flex flex-row items-center justify-around"
    >

      <div className="flex w-full gap-3">
        <div className="">
          <UserStatusIcon pictureRoute={pictureRoute} isActive={isActive} />
        </div>
        <div className="">
          <h1 className="text-lg text-custom_white">{username}</h1>
          <p className="text-sm text-zinc-500">{messagePreview}</p>
        </div>
      </div>

      <div className="w-[20%]">
        <h2 className="text-sm text-right text-gray">{timeAgo}</h2>
      </div>
    </Link>
  );
};
