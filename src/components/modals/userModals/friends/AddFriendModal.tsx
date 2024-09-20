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
      <div className="flex flex-col items-center justify-between w-full h-full p-3">
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 sm:w-4/5 lg:w-3/5">
          <ProfileCover
            backgroundUrl={friendsData?.user.backgroundUrl as string}
            profileUrl={friendsData?.user.profileUrl as string}
            username={friendsData?.user.username as string}
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
    <div className="w-full lg:w-[90%]">
      <p className="text-xl text-left text-white font-extralight font-amiko">
        <span
          // style={{ color: friendsData.background_url }}
          className="font-extrabold text-light_purple"
        >
          {friendsData?.user.username + " "}
        </span>
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
    requestId: friendsData?.id_request,
    notificationId: friendsData?.id_notification,
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
    <div className="flex w-4/5 gap-5 mx-auto lg:w-1/2">
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
