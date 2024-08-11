import { ModalTemplate } from "../../ModalTemplate";

import { CalendarIcon } from "../../../Icons/calendar";

import { useCustomForm } from "../../../../hooks/useForm";
import { InputsForms } from "../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { TextArea } from "../../../forms/Inputs/TextArea";
import { DateInput } from "../../../forms/Inputs/DateBirth";


export const AddEventModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addEvent">
            <AddEventForm />
        </ModalTemplate>
    );
}

const AddEventForm: React.FC = () => {

    const api_function = () => console.log("*llama a api épicamente*")

    const post_success_function = () => console.log("la api se llamó exitosamente")

    const { register, isLoading } = useCustomForm(api_function, post_success_function, "")

    return (
        <div className="h-full flex flex-col gap-10 justify-center items-center">

            <div className="flex flex-row p-4 gap-5 justify-center items-center">
                <CalendarIcon size={40} color="white" />
                <p className="text-2xl text-custom_white text-center">Detalles sobre tu evento</p>
            </div>

            <form className="w-full flex flex-col justify-center items-center gap-5 overflow-y-auto px-1">

                <InputsForms title="Tema del evento" register={register} name="name" placeholder="¿De qué trata tu evento?" />

                <TextArea title="Descripción del evento" placeholder="Cuéntales a los miembros del servidor de qué trata el evento." name="eventDescription" register={register} />

                <div className="w-full">
                    <DateInput title="Fecha del evento" placeholder="Selecciona la fecha de tu evento" />
                </div>

                <SubmitButton text="Guardar " isLoading={isLoading} />
            </form>
        </div>
    );
};
