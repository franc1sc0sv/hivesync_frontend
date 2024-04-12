import { Link } from "react-router-dom";
import { UserStatusIcon } from "../../../../components/Icons/userStatusIcon";
import { MessageProps } from "../types/Messages";

export const FriendsPanel = ({ friends = [] }: { friends: MessageProps[] }) => {
  const id = 1;
  return (
    <div className="flex flex-row items-center overflow-x-auto rounded-lg md:hidden lg:hidden h-16">
      <div className="flex flex-shrink-0 gap-5">
        {friends.length === 0 ? (
          <h2 className="text-custom_white">
            No tienes amigos por el momento.
          </h2>
        ) : (
          <>
            {friends
              .filter((friend) => friend.isActive)
              .map((friend, index) => (
                <Link to={`:${id}`} key={index}>
                  <UserStatusIcon
                    pictureRoute={friend.pictureRoute}
                    isActive={friend.isActive}
                  />
                </Link>
              ))}
            {friends
              .filter((friend) => !friend.isActive)
              .map((friend, index) => (
                <Link to={`:${id}`} key={index}>
                  <UserStatusIcon
                    pictureRoute={friend.pictureRoute}
                    isActive={friend.isActive}
                  />
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
