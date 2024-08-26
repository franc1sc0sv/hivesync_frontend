import { ModalTemplate } from "../../../ModalTemplate"
import { useModal } from "../../../../../store/useModal"

import { useNotifications } from "../../../../../store/useNotifications";
import { useCustomForm } from "../../../../../hooks/useForm";
import { useServer } from "../../../../layouts/ServerLayout/hooks/useServer";

import { SubmitButton } from "../../../../forms/Inputs/Button";
import { InputsForms } from "../../../../forms/Inputs/inputs";

//icons
import { PencilIcon } from "../../../../Icons/pencil";

//mock
import { ServerIcon } from "../../serverInfoModal";

export const EditServerModal: React.FC = () => {
    return (
        <ModalTemplate identificator="editServer">
            <Modal /> 
        </ModalTemplate>
    )
}

const Modal = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <p className="text-custom_white text-center text-2xl">Editar servidor</p>
            <ServerCover />
            <ServerInformation />
            <Form />
        </div>
    )
}


const ServerCover = () => {

    const { selected_server } = useServer();
    const { setModalId } = useModal();

    return (
        <div className="w-4/5 sm:w-3/5 lg:w-1/3 mx-auto text-gray-900 rounded-lg">
            <div
                // style={{ backgroundColor: user?.backgroundUrl }}
                className={`relative overflow-hidden rounded-xl h-36 bg-secondary`}
            >
                <EditCoverThemeButton />
            </div>
            <div
                className="relative flex items-center justify-center w-24 h-24 ml-5 -mt-20 overflow-hidden rounded-2xl"
                onClick={() => setModalId("editServerPicture")}
            >
                <ServerIcon
                    name={selected_server.name}
                    IconServerURL={selected_server.avatarURL}
                />
                <span className="absolute bottom-0 right-0 z-10 w-10 h-10 transition duration-300 border border-white rounded-full left-15 bg-overlay_2 hover:bg-light_purple dark:border-gray-800">
                    <div className="absolute cursor-pointer bottom-1 right-1">
                        <PencilIcon size={30} color="white" />
                    </div>
                </span>
            </div>
        </div>
    )
}

const EditCoverThemeButton: React.FC = () => {
    const { setModalId } = useModal();
    return (
        <div
            className="absolute top-0 right-0 p-3 z-50"
            onClick={() => setModalId("editCoverColor")}
        >
            <PencilIcon size={30} color="white" />
        </div>
    );
};


const ServerInformation: React.FC = () => {

    const { selected_server } = useServer();

    return (
        <div className="w-4/5 sm:w-3/5 lg:w-1/3 mx-auto">
            <div className="flex flex-col justify-start gap-2 rounded-lg">
                <p className="text-2xl text-custom_white text-start">{selected_server?.name}</p>
                {/* <p className="text-md text-gray text-start">{user?.username}</p> */}
            </div>
        </div>
    );
};

const Form: React.FC = () => {
    const { setNotifications } = useNotifications();
    const {selected_server} = useServer();
  
    const api_function = async (data: any) => {
    //   const displayName = data.name;
    //   const aboutUser = data.aboutMe;
  
    //   localStorage.setItem("name", displayName);
    //   localStorage.setItem("aboutUser", aboutUser);
    };
  
    const post_success_function = async () => {
    //   await location.reload();
    //   setNotifications({
    //     message: "ayuda",
    //     severity: "info",
    //   });
    //   console.log("la api se llamó exitosa y épicamente");
    };


    const { onSubmit, register, isLoading } = useCustomForm(
      api_function,
      post_success_function,
      ""
    );
  
    return (
      <form
        onSubmit={onSubmit}
        className="w-4/5 sm:w-3/5 lg:w-1/3 mx-auto flex flex-col justify-center items-center gap-5 px-1 overflow-y-auto"
      >
        <InputsForms
          title="Nombre"
          register={register}
          name="name"
          placeholder="Nombre del servidor"
          inputValue={selected_server?.name}
        />
  
        <SubmitButton text="Guardar cambios" isLoading={isLoading} />
      </form>
    );
  };
  