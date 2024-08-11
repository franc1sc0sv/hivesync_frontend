import { useEffect, useState } from "react";
import { UserStatusIcon } from "../../../../components/Icons/userStatusIcon";
import { MessageProps } from "../types/Messages";

export const FriendsPanel = ({ friends = [] }: { friends: MessageProps[] }) => {
  const [friends_data, setFriends] = useState<MessageProps[]>()

  useEffect(() => {
    const formated_friends = friends.sort((a, b) => Number(b.isActive) - Number(a.isActive))
    setFriends(formated_friends)
  }, [])

  return (
    <div className="grid grid-flow-col overflow-x-auto rounded-lg w-full gap-3 items-center">
      {friends.length === 0 ? <NoFriends /> : <FriendsList friends={friends_data as MessageProps[]} />}
    </div >
  );
};

const FriendsList = ({ friends = [] }: { friends: MessageProps[] }) => {
  return friends.map((friend, index) => (
    <UserStatusIcon
      key={index}
      pictureRoute={friend.pictureRoute}
      isActive={friend.isActive}
    />

  ))
}


const NoFriends = () => {
  return <h2 className="text-custom_white">
    No tienes amigos por el momento.
  </h2>
}