import { useDM } from "../Context/useDM";
import { InboxMessage } from "./InboxMessage";

export const Inbox = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col w-full h-full gap-3 overflow-y-auto">
        <FriendsChats />
      </div>
    </div>
  );
};

const FriendsChats = () => {
  const { friends } = useDM();
  return friends?.map((friend, index) => (
    <InboxMessage friend={friend} key={index} />
  ));
};
