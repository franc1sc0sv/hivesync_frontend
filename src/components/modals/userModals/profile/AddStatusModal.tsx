import { FaFaceSmileWink } from "react-icons/fa6";

import { ModalTemplate } from "../../ModalTemplate";

import { TextArea } from "../../../forms/Inputs/TextArea";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { useCustomForm } from "../../../../hooks/useForm";

const savedStatus = localStorage.getItem("userStatus");


export const AddStatusModal: React.FC = () => {
    return (
        <ModalTemplate identificator="añadirEstado">
            <div className="flex items-center justify-center h-full">
                <StatusForm />
            </div>
        </ModalTemplate>
    )
}

const StatusForm: React.FC = () => {


    const api_function = async (data: any) => {
        const status = data.status;

        localStorage.setItem("userStatus", status);
    }

    const post_success_function = () => {
        location.reload();
        console.log("la api se llamó exitosa y épicamente");
    }

    const { onSubmit, register, isLoading } = useCustomForm(
        api_function,
        post_success_function,
        ``
    );

    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10">

            <div className="flex flex-row p-4 gap-5 justify-center items-center">
                <FaFaceSmileWink className="text-custom_white text-4xl" />
                <p className="text-2xl text-custom_white">¿Cómo te encuentras hoy?</p>
            </div>

            <div className="mx-auto">

                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-10 items-center">
                    <TextArea
                        placeholder="¡Añade un estado genial!"
                        name="status"
                        register={register}
                        inputValue={savedStatus}
                        />
    
                    <SubmitButton text="Guardar" isLoading={isLoading} />
                </form>
            </div>
        </div>
    )
}

