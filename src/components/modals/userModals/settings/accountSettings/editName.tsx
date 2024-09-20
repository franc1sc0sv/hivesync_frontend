import { ModalTemplate } from "../../../ModalTemplate";
import { InputsForms } from "../../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../../forms/Inputs/Button";
import { useState, useEffect } from "react";
import { get_profile } from "../../../../../api/auth";
import { edit_name } from "../../../../../api/user_info";
import { useCustomFormModal } from "../../../../../hooks/useFormModal";

export const EditNameModal: React.FC = () => {
  return (
    <ModalTemplate identificator="editName">
      <div className="flex items-center justify-center h-full">
        <EditNameForm />
      </div>
    </ModalTemplate>
  );
};

export const EditNameForm = () => {
  const [fetchedData, setFetchedData] = useState<Usuario>();

  const id = fetchedData?.id ? fetchedData.id : "";

  const api_function = (data: any) => {
    edit_name(id, data);
  };

  const { onSubmit, register, isLoading } = useCustomFormModal(api_function);

  useEffect(() => {
    const fetch = async () => {
      const fetchData = await get_profile();
      setFetchedData(fetchData);
    };
    fetch();
  }, []);

  return (
    <form
      className="flex flex-col items-center justify-center w-4/5 gap-10 sm:w-3/5 lg:w-1/3"
      onSubmit={onSubmit}
    >
      <InputsForms
        inputValue={fetchedData?.name}
        title="Editar nombre de la cuenta"
        name="name"
        placeholder="Escribe un nombre"
        register={register}
      />
      <SubmitButton text="Guardar cambios" isLoading={isLoading} />
    </form>
  );
};
