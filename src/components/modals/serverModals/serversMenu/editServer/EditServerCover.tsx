import { ModalTemplate } from "../../../ModalTemplate";
import { useCustomForm } from "../../../../../hooks/useForm";
import { ColorPickerInput } from "../../../../forms/Inputs/ColorPicker";

import { SubmitButton } from "../../../../forms/Inputs/Button";

export const EditCoverModal: React.FC = () => {
  return (
    <ModalTemplate identificator="editCoverColor">
      <Form />
    </ModalTemplate>
  );
};

const Form: React.FC = () => {
  const api_function = async (_: any) => {
    //   const theme = data.themeColor;
    //   localStorage.setItem("themeColor", theme);
  };

  const post_success_function = () => {
    //   location.reload();
    //   console.log("la api se llamó exitosa y épicamente");
  };

  const resetColor = () => {
    //   localStorage.setItem("themeColor", "#45156B");
    //   location.reload();
  };

  const { onSubmit, register, isLoading } = useCustomForm(
    api_function,
    post_success_function,
    ""
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full h-full gap-5 p-4 mx-auto text-white sm:w-4/5 lg:w-1/2 "
    >
      <ColorPickerInput register={register} name="themeColor" />

      <p
        onClick={() => resetColor()}
        className="p-2 my-2 text-xl transition-all duration-300 border-2 border-overlay_1 hover:border-2 hover:border-custom_white rounded-xl"
      >
        Restablecer color de tema
      </p>
      <SubmitButton text="Guardar cambios" isLoading={isLoading} />
    </form>
  );
};
