//modal utils
import { useModal } from "../../../../store/useModal";
import { EditPictureOrCoverModal } from "../../../modals/userModals/profile/EditPictureOrCoverModal";

import { useNotifications } from "../../../../store/useNotifications";

//form utils
import { useCustomForm } from "../../../../hooks/useForm";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { InputsForms } from "../../../forms/Inputs/inputs";
import { TextArea } from "../../../forms/Inputs/TextArea";

//icons
import { PencilIcon } from "../../../Icons/pencil";

//mock
import { UserAvatar } from "../../../Avatars/UserAvatar";
import { useSession } from "../../../../store/user";

// componente activado en UserInformation

export const EditProfileFakePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full rounded-xl">
      <div className="w-full max-w-[320px] flex flex-col gap-5 m-5 h-full py-5">
        <ProfileCover />
        <UserInformation />
        <EditProfileForm />
        <EditPictureOrCoverModal />
      </div>
    </div>
  );
};

const ProfileCover: React.FC = () => {
  const { user } = useSession();

  const { setModalId } = useModal();

  return (
    <div className="w-full text-gray-900 rounded-lg">
      <div
        style={{ backgroundColor: user?.backgroundUrl }}
        className={`relative overflow-hidden rounded-xl h-36`}
      >
        <EditCoverThemeButton />
      </div>
      <div
        className="relative flex items-center justify-center w-24 h-24 ml-5 -mt-20 overflow-hidden rounded-2xl"
        onClick={() => setModalId("editProfilePicture")}
      >
        <UserAvatar
          profileURl={user?.profileUrl as string}
          username={user?.username as string}
        />
        <span className="absolute bottom-0 right-0 z-10 w-10 h-10 transition duration-300 border border-white rounded-full left-15 bg-overlay_2 hover:bg-primary dark:border-gray-800">
          <div className="absolute cursor-pointer bottom-1 right-1">
            <PencilIcon size={30} color="white" />
          </div>
        </span>
      </div>
    </div>
  );
};

const EditCoverThemeButton: React.FC = () => {
  const { setModalId } = useModal();
  return (
    <div
      className="absolute top-0 right-0 p-3"
      onClick={() => setModalId("editCoverTheme")}
    >
      <PencilIcon size={30} color="white" />
    </div>
  );
};

const UserInformation: React.FC = () => {
  const { user } = useSession();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
        <p className="text-3xl text-custom_white text-start">{user?.name}</p>
        <p className="text-md text-gray text-start">{user?.username}</p>
      </div>
    </div>
  );
};

const EditProfileForm: React.FC = () => {
  const { setNotifications } = useNotifications();

  const api_function = async (data: any) => {
    const displayName = data.name;
    const aboutUser = data.aboutMe;

    localStorage.setItem("name", displayName);
    localStorage.setItem("aboutUser", aboutUser);
  };

  const post_success_function = async () => {
    await location.reload();
    setNotifications({
      message: "ayuda",
      severity: "info",
    });
    console.log("la api se llamó exitosa y épicamente");
  };
  const { user } = useSession();

  const { onSubmit, register, isLoading } = useCustomForm(
    api_function,
    post_success_function,
    ""
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full h-full gap-5 p-5 px-1 text-start"
    >
      <InputsForms
        title="Nombre"
        register={register}
        name="name"
        placeholder="Nombre a mostrar"
        inputValue={user?.name}
      />

      <TextArea
        title="Sobre mí"
        name="aboutMe"
        placeholder="Agrega una genial descripción"
        register={register}
        inputValue={user?.about}
      />
      <SubmitButton text="Guardar cambios" isLoading={isLoading} />
    </form>
  );
};
