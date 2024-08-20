import { InboxMessage } from "./InboxMessage";
import { MessageProps } from "../types/Messages";

const awa = [
  {
    pictureRoute: '/images/user1.jpg',
    isActive: true,
    username: 'john_doe',
    messagePreview: 'Hey! How have you been?',
    timeAgo: '2 hours ago'
  },
  {
    pictureRoute: '/images/user2.jpg',
    isActive: false,
    username: 'jane_smith',
    messagePreview: 'Can we catch up later?',
    timeAgo: '1 day ago'
  },
  {
    pictureRoute: '/images/user3.jpg',
    isActive: true,
    username: 'mike_jones',
    messagePreview: 'I sent the files you asked for.',
    timeAgo: '10 minutes ago'
  },
  {
    pictureRoute: '/images/user4.jpg',
    isActive: false,
    username: 'emily_white',
    messagePreview: 'See you at the meeting tomorrow.',
    timeAgo: '3 days ago'
  }
];


export const Inbox = ({ friends = [] }: { friends: MessageProps[] }) => {
  return (
    <div className="h-[80%]">
      <div className="grid items-start w-full h-full grid-flow-row gap-3 overflow-y-auto">
        <FriendsChats friends={awa} />
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
