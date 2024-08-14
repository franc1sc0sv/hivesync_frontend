import { v4 as uuidv4 } from "uuid";
import { ModalTemplate } from "../ModalTemplate";
import { InputsForms } from "../../forms/Inputs/inputs";
import { SubmitButton } from "../../forms/Inputs/Button";
import { useServer } from "../../layouts/ServerLayout/hooks/useServer";
import { useCustomFormModal } from "../../../hooks/useFormModal";

export const CreateCategory: React.FC = () => {
  return (
    <ModalTemplate identificator="CreateCategory">
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
        Crear categoria
      </p>
    </div>
  );
};

const ModalForm = () => {
  const { selected_server } = useServer();

  const api_function = (data: any) => {
    const existingCategories = JSON.parse(
      localStorage.getItem("serverCategories") || "[]"
    );

    const category = data.category.trim();
    console.log(existingCategories, category);

    existingCategories.some((category: any) => category.name === category);

    if (category.length < 3) {
      throw {
        message: "nombre muy corto",
        severity: "warning",
      };
    }

    console.log(
      existingCategories.some((category: any) => category.name === category)
    );

    if (
      existingCategories.some((category: any) => category.name === category)
    ) {
      throw {
        message: "nombre ya en uso",
        severity: "warning",
      };
    }

    const newCategory = {
      id: uuidv4(),
      name: category,
      serverID: selected_server.id,
    };

    const updatedCategories = [...existingCategories, newCategory];
    localStorage.setItem("serverCategories", JSON.stringify(updatedCategories));
    return true;
  };

  const { register, isLoading, onSubmit } = useCustomFormModal(api_function);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full gap-5 px-1 overflow-y-auto"
    >
      <InputsForms
        title="Nombre de la categoria"
        register={register}
        name="category"
        placeholder="Nombre de la categoria"
      />

      <SubmitButton text="Crear" isLoading={isLoading} />
    </form>
  );
};
