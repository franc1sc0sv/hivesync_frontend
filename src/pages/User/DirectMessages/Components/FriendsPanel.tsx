import { useEffect, useState } from "react";
import { UserStatusIcon } from "../../../../components/Icons/userStatusIcon";
import { MessageProps } from "../types/Messages";
import { SadFaceIcon } from "../../../../components/Icons/sadFace";

export const FriendsPanel = ({ friends = [] }: { friends: MessageProps[] }) => {
  const [friends_data, setFriends] = useState<MessageProps[]>()

  useEffect(() => {
    const formated_friends = friends.sort((a, b) => Number(b.isActive) - Number(a.isActive))
    setFriends(formated_friends)
  }, [])

  return (
    // <div className="grid grid-flow-col overflow-x-auto rounded-lg w-full gap-3 items-center">
    <div className="grid grid-flow-col overflow-x-auto rounded-lg h-screen w-full gap-3 items-center justify-center">

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
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-10">
      <SadFaceIcon size={60} color="#fff" />
      <p className="text-custom_white text-3xl text-center">Este espacio está un poco solitario...</p>
      <p className="text-custom_white text-xl">¡Haz nuevos amigos y llénalo de vida!</p>
    </div>
  )
}