import { FieldValues, UseFormRegister } from "react-hook-form";
import { useCustomFormCreateServer } from "../../../../hooks/useFormCreateServer";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { InputsForms } from "../../../forms/Inputs/inputs";
import { ModalTemplate } from "../../ModalTemplate";

import { v4 as uuidv4 } from "uuid";

export const CreateServerModal: React.FC = () => {
  return (
    <ModalTemplate identificator="createServer">
      <div className="flex flex-col gap-5">
        <ModalHeader />
        <ModalForm />
      </div>
    </ModalTemplate>
  );
};

const ModalHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-2xl font-bold text-center font-amiko text-custom_white">
        Crea tu servidor
      </p>
    </div>
  );
};

const ModalForm = () => {
  const api_function = (data: any) => {
    const name = data.name.trim();
    if (name.length < 3) {
      throw {
        message: "nombre muy corto",
        severity: "warning",
      };
    }

    const servers = JSON.parse(localStorage.getItem("servers") || "[]");
    if (servers.some((server: any) => server.name === name)) {
      throw {
        message: "nombre ya en uso",
        severity: "warning",
      };
    }

    const newId = uuidv4();

    const serverURL = `/app/${newId}/85b70973-9e7c-436d-9249-f6e5d1abc575`;

    const newServer = {
      IconServerURL: ``,
      url: serverURL,
      active: false,
      id: newId,
      name: name,
    };

    // Recuperar categorías existentes
    const existingCategories = JSON.parse(
      localStorage.getItem("serverCategories") || "[]"
    );

    const textCategoryId = uuidv4();
    const voiceCategoryId = uuidv4();

    const defaultCategories = [
      {
        id: textCategoryId,
        name: "Canales de texto",
        serverID: newId,
      },
      {
        id: voiceCategoryId,
        name: "Canales de voz",
        serverID: newId,
      },
    ];

    // Agregar las nuevas categorías a las existentes
    const updatedCategories = [...existingCategories, ...defaultCategories];

    // Crear canales predeterminados para cada categoría
    const defaultChannels = [
      {
        id: uuidv4(),
        name: "general-texto",
        categoryID: textCategoryId,
        serverID: newId,
        type: "text",
      },
      {
        id: uuidv4(),
        name: "general-video",
        categoryID: voiceCategoryId,
        serverID: newId,
        type: "video",
      },
    ];

    // Recuperar canales existentes
    const existingChannels = JSON.parse(
      localStorage.getItem("serverChannels") || "[]"
    );

    // Agregar los nuevos canales a los existentes
    const updatedChannels = [...existingChannels, ...defaultChannels];

    // Guardar los servidores, categorías y canales en localStorage
    servers.push(newServer);
    localStorage.setItem("servers", JSON.stringify(servers));
    localStorage.setItem("serverCategories", JSON.stringify(updatedCategories));
    localStorage.setItem("serverChannels", JSON.stringify(updatedChannels));

    return newServer;
  };

  const { register, isLoading, onSubmit } =
    useCustomFormCreateServer(api_function);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full gap-5 px-1 overflow-y-auto"
    >
      <EditProfilePicture register={register} />

      <InputsForms
        title="Nombre l servidor"
        register={register}
        name="name"
        placeholder="Nombre del servidor"
      />

      <SubmitButton text="Crear servidor " isLoading={isLoading} />
    </form>
  );
};

const EditProfilePicture = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-5 text-white">
      <ImgInput status={() => { }} register={register} name="avatar" text="Subir" />
    </div>
  );
};
