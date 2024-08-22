import { ModalTemplate } from "../../ModalTemplate";

import { InputsForms } from "../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { SelectInput } from "../../../forms/Inputs/Select/Select";

import { BiSolidCategory } from "react-icons/bi";
import {
  getCategories,
  getChannels,
} from "../../../layouts/ServerLayout/Context/ServerContext";
import { useServer } from "../../../layouts/ServerLayout/hooks/useServer";
import { RadioInput } from "../../../forms/Inputs/Radio/InputRadio";
import { useState } from "react";
import { ChannelTypeEnum } from "../../../layouts/ServerLayout/Enums/SpecificServer";

import { v4 as uuidv4 } from "uuid";
import { useCustomFormCreateServer } from "../../../../hooks/useFormCreateServer";

import { HiSpeakerWave } from "react-icons/hi2";
import { HiHashtag } from "react-icons/hi";

const options = [
  {
    label: "Texto",
    value: ChannelTypeEnum.TEXT,
    description: "Chatea y envia imagenes",
    Icon: HiHashtag,
  },
  {
    label: "Voz",
    value: ChannelTypeEnum.VIDEO,
    description: "Comunicate por voz y video",
    Icon: HiSpeakerWave,
  },
];

export const CreateChannel: React.FC = () => {
  return (
    <ModalTemplate identificator="CreateChannel">
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
        Crear canal
      </p>
    </div>
  );
};

const ModalForm = () => {
  const { selected_server } = useServer();

  const categorias_por_server = getCategories().filter(
    (server: any) => server.serverID === selected_server.id
  );

  const api_function = (data: any) => {
    const category = data.category?.trim() || "";
    const name = data.name?.trim() || "";
    const type = data.type?.trim() || "";

    if (!name || !category || !type) {
      throw {
        message: "Todos los campos deben ser completados.",
        severity: "warning",
      };
    }

    if (name.length < 3) {
      throw {
        message: "El nombre debe tener al menos 3 caracteres.",
        severity: "warning",
      };
    }

    const newChannel = {
      id: uuidv4(),
      name: data.name,
      categoryID: data.category,
      serverID: selected_server.id,
      type: data.type,
    };

    const updatedChannels = [...getChannels(), newChannel];
    localStorage.setItem("serverChannels", JSON.stringify(updatedChannels));

    const url = `/app/${selected_server.id}/${newChannel.id}`;

    return { url: url };
  };

  const { register, isLoading, onSubmit, setValue } =
    useCustomFormCreateServer(api_function);

  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleOptionChange = (value: string) => {
    setValue("type", value);
    setSelectedOption(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full px-1 overflow-y-auto gap-9"
    >
      <InputsForms
        title="Nombre del canal"
        register={register}
        name="name"
        placeholder="Nombre del canal"
      />

      <SelectInput
        StrokeIcon={false}
        name="category"
        Icon={BiSolidCategory}
        text={"Categoria"}
        required
        setValue={setValue}
        options={categorias_por_server}
        placeholder={"Categorias"}
      />

      <RadioInput
        title="Tipo de canal"
        options={options}
        name="exampleOptions"
        selectedValue={selectedOption}
        onChange={handleOptionChange}
      />

      <SubmitButton text="Crear" isLoading={isLoading} />
    </form>
  );
};
