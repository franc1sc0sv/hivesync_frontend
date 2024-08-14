import { ModalTemplate } from "../ModalTemplate";
import { InputsForms } from "../../forms/Inputs/inputs";
import { SubmitButton } from "../../forms/Inputs/Button";
import { useCustomForm } from "../../../hooks/useForm";

import { SelectInput } from "../../forms/Inputs/Select/Select";

import { BiSolidCategory } from "react-icons/bi";
import { getCategories } from "../../layouts/ServerLayout/Context/ServerContext";
import { useServer } from "../../layouts/ServerLayout/hooks/useServer";
import { RadioInput } from "../../forms/Inputs/Radio/InputRadio";
import { useState } from "react";

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

  const api_function = (data: any) => {};

  const post_success_function = () => {};

  const { register, isLoading, onSubmit } = useCustomForm(
    api_function,
    post_success_function
  );

  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full gap-5 px-1 overflow-y-auto"
    >
      <InputsForms
        title="Nombre del canal"
        register={register}
        name="category"
        placeholder="Nombre del canal"
      />

      <SelectInput
        StrokeIcon={false}
        name="category"
        Icon={BiSolidCategory}
        text={"Categoria"}
        required
        options={categorias_por_server}
        placeholder={"Categorias"}
      />

      <RadioInput
        options={[
          { label: "Opción 1", value: "option1" },
          { label: "Opción 2", value: "option2" },
        ]}
        name="exampleOptions"
        selectedValue={selectedOption}
        onChange={handleOptionChange}
      />

      <SubmitButton text="Crear" isLoading={isLoading} />
    </form>
  );
};

const options = [
  { text: "Consultoría de Mejora Continúa", value: "1" },
  { text: "Reclutamiento y Selección de Personal", value: "2" },
];
