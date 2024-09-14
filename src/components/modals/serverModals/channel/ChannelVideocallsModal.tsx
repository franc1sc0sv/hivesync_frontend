import { ModalTemplate } from "../../ModalTemplate";
import { useChannelList } from "../../../layouts/ServerLayout/hooks/useChannelList";
import { ReadyToJoin } from "../../../layouts/ServerLayout/Components/Channel/Components/ReadyToJoin";


export const ChannelVideocallsModal = () => {
  const { actualChannel } = useChannelList();

  
  const modalId = actualChannel?.id ? actualChannel.id.toString() : '';

  return (
    <ModalTemplate identificator={modalId}>
      <ReadyToJoin/>
    </ModalTemplate>
  );
};
