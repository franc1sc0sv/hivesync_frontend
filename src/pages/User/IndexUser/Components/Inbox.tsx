import { Link } from "react-router-dom";
import { InboxMessage } from "../../../../components/layout/user/inboxMessage";
import { MessageProps } from "../types/Messages";

export const Inbox = ({ friends = [] }: { friends: MessageProps[] }) => {
  const id = 1;

  return (
    <div className="m-5 overflow-y-auto rounded-lg md:hidden lg:hidden">
      {friends?.map((friend, index) => (
        <Link to={`:${id}`} key={index}>
          <InboxMessage
            pictureRoute={friend.pictureRoute}
            isActive={friend.isActive}
            username={friend.username}
            messagePreview={friend.messagePreview}
            timeAgo={friend.timeAgo}
          />
        </Link>
      ))}
    </div>
  );
};
