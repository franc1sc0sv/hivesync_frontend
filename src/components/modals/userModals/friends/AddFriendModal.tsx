import {
  accept_friend_request,
  reject_friend_request,
} from "../../../../api/social";
import { useToogleAPI } from "../../../../hooks/useToogleAPI";
import { ProfileCover } from "../../../../pages/User/Profile/Components/Cover";
import { useAddFriendsData } from "../../../../store/useAddFriendsData";

import { CustomizedButton } from "../../../buttons/customizedButton";
import { ModalTemplate } from "../../ModalTemplate";

export const AddFriendModal = () => {
  const { friendsData } = useAddFriendsData();

  return (
    <ModalTemplate identificator="AddFriendModal">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <ProfileCover
            backgroundUrl={friendsData.background_url}
            profileUrl={friendsData.profile_url}
            username={friendsData.username_who_sent}
            show_config={false}
          />
          <MainInformation />
        </div>
        <ButtonsActions />
      </div>
    </ModalTemplate>
  );
};

const MainInformation: React.FC = () => {
  const { friendsData } = useAddFriendsData();

  return (
    <div className="flex flex-col w-full gap-2 p-3 rounded-lg bg-overlay_2 ">
      <p className="text-sm text-white font-extralight font-amiko ">
        <span
          style={{ color: friendsData.background_url }}
          className="font-extrabold"
        >
          {friendsData.username_who_sent}
        </span>{" "}
        te ha enviado una solicitud de amistad
      </p>
    </div>
  );
};

const ButtonsActions = () => {
  const { friendsData } = useAddFriendsData();

  const { onSubmit: OnSubmitReject } = useToogleAPI({
    api_function: reject_friend_request,
    url: "/app/@me",
  });

  const { onSubmit: OnSubmitAccept } = useToogleAPI({
    api_function: accept_friend_request,
    url: "/app/@me",
  });

  const data = {
    requestId: friendsData.id_request,
    notificationId: friendsData.id_notification,
  };

  const acceptRequest = async () => {
    await OnSubmitAccept(data);
  };

  const declineRequest = async () => {
    await OnSubmitReject(data);
  };

  return (
    <ButtonsContainer
      acceptRequest={acceptRequest}
      declineRequest={declineRequest}
    />
  );
};

const ButtonsContainer = ({
  acceptRequest,
  declineRequest,
}: {
  acceptRequest: () => Promise<void>;
  declineRequest: () => Promise<void>;
}) => {
  return (
    <div className="flex w-full gap-5 lg:flex-row sm:w-1/3 md:w-1/3 lg:w-1/5">
      <CustomizedButton
        text="Aceptar"
        color="#382C6C"
        displayIcon={false}
        onAction={acceptRequest}
      />
      <CustomizedButton
        text="Rechazar"
        color="#EF4444"
        displayIcon={false}
        onAction={declineRequest}
      />
    </div>
  );
};
