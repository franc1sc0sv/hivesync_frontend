import { FaFaceSmileWink } from "react-icons/fa6";

import { ModalTemplate } from "../../ModalTemplate";

import { TextArea } from "../../../forms/Inputs/TextArea";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { useCustomForm } from "../../../../hooks/useForm";


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

    const api_login = () => console.log("hola, *llama a la api épicamente*");

    const success = () => {
        console.log("success");
    }

    const { onSubmit, register, isLoading } = useCustomForm(
        api_login,
        success,
        ``
    );

    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10">

            <div className="flex flex-row p-4 gap-5 justify-center items-center">
                <FaFaceSmileWink className="text-custom_white text-4xl" />
                <p className="text-2xl text-custom_white">¿Cómo te encuentras hoy?</p>
            </div>

            <div className="mx-auto">

                <form onSubmit={onSubmit} className="flex flex-col gap-10 items-center">
                    <TextArea placeholder="¡Añade un estado genial!" name="status" register={register} />

                    <SubmitButton text="Guardar" isLoading={isLoading} />
                </form>
            </div>
        </div>
    )
}

