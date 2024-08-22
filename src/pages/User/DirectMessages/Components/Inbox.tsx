import { InboxMessage } from "./InboxMessage";
import { MessageProps } from "../types/Messages";
import { chatsList } from "../mocks/messages";

export const Inbox = ({ friends = [] }: { friends: MessageProps[] }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="grid items- w-full h-[90%] grid-flow-row gap-6 overflow-y-auto">
        <FriendsChats friends={chatsList} />
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
