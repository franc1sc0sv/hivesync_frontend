import { useCustomForm } from "../../../../../hooks/useForm";
import { TextArea } from "../../../../forms/Inputs/TextArea";
import { SubmitButton } from "../../../../forms/Inputs/Button";
import { FaFaceSmileWink } from "react-icons/fa6";

import { ModalTemplate } from "../../../ModalTemplate";

export const EditAboutMeModal: React.FC = () => {
    return (
        <ModalTemplate identificator="aboutMe">
            <AboutMeForm />
        </ModalTemplate>

    )
}

export const AboutMeForm: React.FC = () => {
    const api_function = async (data: any) => {
      const status = data.status;
  
      localStorage.setItem("userStatus", status);
    };
  
    const post_success_function = () => {
      location.reload();
      console.log("la api se llamó exitosa y épicamente");
    };
  
    const { onSubmit, register, isLoading } = useCustomForm(
      api_function,
      post_success_function,
      ``
    );
  
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-10">
        <div className="flex flex-row items-center justify-center gap-5 p-4">
          <FaFaceSmileWink className="text-4xl text-custom_white" />
          <p className="text-2xl text-custom_white">Cuéntanos sobre ti</p>
        </div>
  
        <div className="mx-auto">
          <form onSubmit={onSubmit} className="flex flex-col items-center gap-10">
            <TextArea
              placeholder="¡Añade una descripción genial sobre ti!"
              name="status"
              register={register}
              inputValue={""}
            />
  
            <SubmitButton text="Guardar" isLoading={isLoading} />
          </form>
        </div>
      </div>
    );
  };
  