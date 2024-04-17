import { InboxMessage } from "./InboxMessage";
import { MessageProps } from "../types/Messages";

export const Inbox = ({ friends = [] }: { friends: MessageProps[] }) => {
  return (
    <div className="h-[80%]">
      <div className="h-full w-full grid grid-flow-row overflow-y-auto gap-3">
        <FriendsChats friends={friends} />
      </div>
    </div >
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
  ))
}
