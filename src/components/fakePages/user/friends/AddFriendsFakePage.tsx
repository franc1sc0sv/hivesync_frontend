import { FaPaperclip } from "react-icons/fa6";

import { SearchBar } from "../../../forms/Inputs/SearchBar";
import { SubmitButton } from "../../../forms/Inputs/Button";

import { InviteByLinkModal } from "../../../modals/userModals/profile/inviteFriendsByLink";
import { useFormData } from "../../../../hooks/useFormData";
import { useModal } from "../../../../store/useModal";
import { get_user_username } from "../../../../api/user_info";
import { LoadingPage } from "../../../routes/loadingPage";
import { Notifications } from "../../../Alerts/Notification";

import { UserBox } from "./Components/UserBox";
import { ExternalProfilePublicModal } from "../../../modals/generalModals/ExternalProfilePublicModal";
import { FieldValues, UseFormRegister } from "react-hook-form";

export const AddFriendsFakePage: React.FC = () => {
  const { data, onSubmit, register, isLoading } = useFormData({
    api_function: get_user_username,
    resetF: false,
  });

  if (isLoading) <LoadingPage />;

  return (
    <>
      <div className="w-full h-full">
        <ShareLinkButtons />
        <SendFriendsRequest
          data={data}
          isLoading={isLoading}
          onSubmit={onSubmit}
          register={register}
        />
      </div>

      <InviteByLinkModal />
      <Notifications />
      <ExternalProfilePublicModal user={data} />
    </>
  );
};

const ShareLinkButtons: React.FC = () => {
  const { setModalId } = useModal();
  return (
    <div className="flex flex-row items-center justify-center w-full gap-5 mt-2">
      <button
        className="flex flex-col items-center gap-2 sm:h-1/4"
        onClick={() => {
          setModalId("inviteByLink");
        }}
      >
        <div className="p-4 rounded-full bg-overlay_2">
          <FaPaperclip size={25} fill="white" />
        </div>
        <h2 className="text-custom_white text-md">Copiar link de invitación</h2>
      </button>
    </div>
  );
};

const SendFriendsRequest = ({
  onSubmit,
  register,
  data,
  isLoading,
}: {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  data: any;
  isLoading: boolean;
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-between w-full gap-10 p-5 h-4/5"
    >
      <div className="mx-auto flex flex-col items-center w-[320px] gap-5">
        <SearchBar
          name="username"
          register={register}
          placeholder="Busca un nombre de usuario"
        />

        <User data={data} />
      </div>

      <div className="w-[320px] mx-auto flex flex-col items-end justify-end py-10 md:p-0 ">
        <SubmitButton text="Buscar" isLoading={isLoading} />
      </div>
    </form>
  );
};

const User = ({ data }: { data: UserProfile }) => {
  if (!data) return;
  if (!data.id) return <NoResults />;
  return (
    <UserBox
      id={data.id_user}
      isFromFriends
      avatarURL={data.profileUrl}
      username={data.username}
    />
  );
};

const NoResults = () => {
  return (
    <div className="flex items-start w-full">
      <p className="text-sm text-red-500 font-amiko">
        Ups al parecer hubo un error al encontrar este usuario
      </p>
    </div>
  );
};
