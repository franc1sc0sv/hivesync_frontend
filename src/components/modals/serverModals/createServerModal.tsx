import { useCustomFormCreateServer } from "../../../hooks/useFormCreateServer";
import { SubmitButton } from "../../forms/Inputs/Button";

import { InputsForms } from "../../forms/Inputs/inputs";
import { ModalTemplate } from "../ModalTemplate";

import { create_server } from "../../../api/server";
import { useState } from "react";
import { RadioInput } from "../../forms/Inputs/Radio/InputRadio";
import { CheckboxInput } from "../../forms/Inputs/checkbox/checkBox";

//icons
import { HiUserGroup } from "react-icons/hi";
import { IoIosColorPalette } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

enum ServerPrivacity {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

enum ServerTags {
  ENTERTAINMENT = "Entretinimiento",
  STUDY = "Estudio y productividad",
  SOCIAL = "Comunidad y social",
  CREATIVITY = "Arte y creatividad",
}

const options = [
  {
    label: "Publico",
    value: ServerPrivacity.PUBLIC,
    description: "Chatea y envia imagenes",
    Icon: TbWorld,
  },
  {
    label: "Privado",
    value: ServerPrivacity.PRIVATE,
    description: "Comunicate por voz y video",
    Icon: FaLock,
  },
];

const serverTags = [
  {
    label: "Entretenimiento",
    value: ServerTags.ENTERTAINMENT,
    description:
      "Desde juegos en línea hasta salas de chat para ver contenido multimedia",
    Icon: IoGameController,
  },
  {
    label: "Estudio y Productividad",
    value: ServerTags.STUDY,
    description: "Organiza sesiones de estudio y enfócate en tus metas",
    Icon: FaBook,
  },
  {
    label: "Comunidad y Social",
    value: ServerTags.SOCIAL,
    description: "Conéctate con personas y haz nuevos amigos",
    Icon: HiUserGroup,
  },
  {
    label: "Arte y Creatividad",
    value: ServerTags.CREATIVITY,
    description: "Comparte tus creaciones y explora nuevas ideas",
    Icon: IoIosColorPalette,
  },
];

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
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [tagSelected, setTagsSelected] = useState<string[]>([]);

  const { register, isLoading, onSubmit, setValue } =
    useCustomFormCreateServer(create_server);

  const handleOptionChange = (value: string) => {
    setValue("privacity", value);
    setSelectedOption(value);
  };

  const handleTagChange = (value: string) => {
    setTagsSelected((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full gap-5 px-1 overflow-y-auto"
    >
      <div className="w-[320px]">
        <InputsForms
          title="Nombre del servidor"
          register={register}
          name="name"
          placeholder="Nombre del servidor"
        />
      </div>

      {/* <div className="flex justify-center max-w-4/5 sm:w-full">
        <EditProfilePicture register={register} />
      </div> */}

      <div className="flex flex-col items-center justify-center w-full gap-10">
        <RadioInput
          title="Tipo de canal"
          options={options}
          name="exampleOptions"
          selectedValue={selectedOption}
          onChange={handleOptionChange}
        />

        <CheckboxInput
          title="Etiquetas del servidor"
          options={serverTags}
          name="exampleTags"
          selectedValue={tagSelected}
          onChange={handleTagChange}
        />
      </div>

      <div className="w-[320px]">
        <SubmitButton text="Crear servidor" isLoading={isLoading} />
      </div>
    </form>
  );
};

// const EditProfilePicture = ({
//   register,
// }: {
//   register: UseFormRegister<FieldValues>;
// }) => {
//   const [picRoute, setPicRoute] = useState("");

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files[0].name;
//     if (file) {
//       setPicRoute(file);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-full p-5 text-white lg:w-1/3">
//       <ImgInput
//         status={handleFileChange}
//         register={register}
//         name="avatar"
//         text={
//           picRoute
//             ? "Archivo seleccionado: " + picRoute
//             : "Haz click para subir una foto"
//         }
//       />
//     </div>
//   );
// };
