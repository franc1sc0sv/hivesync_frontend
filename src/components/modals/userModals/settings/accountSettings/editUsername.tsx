import { ModalTemplate } from "../../../ModalTemplate";
import { useNotifications } from "../../../../../store/useNotifications";
import { useCustomForm } from "../../../../../hooks/useForm";
import { InputsForms } from "../../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../../forms/Inputs/Button";
import { useState } from "react";


export const EditUsernameModal: React.FC = () => {
    return (
        <ModalTemplate identificator="editUsername">
            <div className="flex items-center justify-center h-full">
                <Form />
            </div>
        </ModalTemplate>
    )
}

const Form = () => {

    const [message, setMessage] = useState("");
    const { setNotifications } = useNotifications();

    const api_function = async (data: any) => {
        const username = data.username;
        if (username.trim().length === 0) {
            setMessage("Los campos no deben quedar vacíos");
            return;
        }
        localStorage.setItem("username", username);
        location.reload();
        setNotifications({
            message: "Los cambios han sido guardados exitosamente",
            severity: "success" 
        })
    }

    const post_success_function = () => {
        console.log("la api se llamó exitosa y épicamente");
    }

    const { onSubmit, register, isLoading } = useCustomForm(
        api_function,
        post_success_function,
        ``
    );

    return (
        <form
            className="w-4/5 sm:w-3/5 lg:w-1/3 flex flex-col justify-center items-center gap-10"
            onSubmit={onSubmit}>
            <InputsForms
                title="Editar nombre de usuario"
                name="username"
                placeholder="Escribe un usuario"
                register={register}
            />
            {message !== "" && <p className="text-lg text-custom_white text-center">{message}</p>}
            <SubmitButton text="Guardar cambios" isLoading={isLoading} />
        </form>
    )
}