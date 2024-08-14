import { MessageText } from "../../components/layouts/ServerLayout/Components/Messages/MessageText"
import { CallInterface } from "../../components/layouts/ServerLayout/Components/Channel/Videocalls/VideoCalls"
import { PurpleButton } from "../../components/buttons/PurpleButton"

import { NoFriendsinCall } from "../../components/layouts/ServerLayout/Components/Channel/Videocalls/NoFriendsInCall"
export function TestingPage() {

  return (
    <>
      {/* <MessageText/> */}
      {/* <PurpleButton text="Encuentra más amigos"
      onAction={hablaEpicamente}/> */}
      {/* <NoFriendsinCall/> */}
     
        <CallInterface />

      







    </>
  )
}
