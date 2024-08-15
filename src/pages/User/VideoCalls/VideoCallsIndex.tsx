import React from "react";
import { CallInterface } from "../../../components/layouts/ServerLayout/Components/Channel/Videocalls/CallInterface";
import { UsersCalls } from "../../../components/layouts/ServerLayout/Components/Channel/Videocalls/Components/UsersCalls";

type Props = {
  isVoiceCall: boolean;
};

export const VideoCallComponent: React.FC<Props> = ({ isVoiceCall }) => {
  return (
    <>
      <CallInterface />
    </>
  );
};
