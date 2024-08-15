import { InboxMessage } from "./InboxMessage";
import { MessageProps } from "../types/Messages";

export const Inbox = ({ friends = [] }: { friends: MessageProps[] }) => {
  return (
    <div className="h-[80%]">
      <div className="grid items-start w-full h-full grid-flow-row gap-3 overflow-y-auto">
        <FriendsChats friends={friends} />
      </div>
    </div>
  );
};

const FriendsChats = ({ friends = [] }: { friends: MessageProps[] }) => {
  return friends?.map((friend, index) => (
    <InboxMessage
      key={index}
      pictureRoute={friend.pictureRoute}
      isActive={friend.isActive}
      username={friend.username}
      messagePreview={friend.messagePreview}
      timeAgo={friend.timeAgo}
    />
  ));
};
