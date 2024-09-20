import { ModalTemplate } from "../../../ModalTemplate";
import { useCustomFormModal } from "../../../../../hooks/useFormModal";
import { InputsForms } from "../../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../../forms/Inputs/Button";
import { get_profile } from "../../../../../api/auth";
import { useState } from "react";
import { useEffect } from "react";
import { edit_username } from "../../../../../api/user_info";

export const EditUsernameModal: React.FC = () => {
  return (
    <ModalTemplate identificator="editUsername">
      <div className="flex items-center justify-center h-full">
        <EditUsernameForm />
      </div>
    </ModalTemplate>
  );
};

export const EditUsernameForm = () => {
  const [fetchedData, setFetchedData] = useState<Usuario>();

  const { onSubmit, register, isLoading } = useCustomFormModal(edit_username);

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
        inputValue={fetchedData?.username}
        title="Editar nombre de usuario"
        name="username"
        placeholder="Escribe un usuario"
        register={register}
      />
      <SubmitButton text="Guardar cambios" isLoading={isLoading} />
    </form>
  );
};
