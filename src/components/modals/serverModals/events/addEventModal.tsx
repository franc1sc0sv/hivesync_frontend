import { ModalTemplate } from "../../ModalTemplate";

import { CalendarIcon } from "../../../Icons/calendar";

import { useServer } from "../../../layouts/ServerLayout/hooks/useServer";

import { create_event } from "../../../../api/events";
import { useCustomFormModal } from "../../../../hooks/useFormModal";
import { InputsForms } from "../../../forms/Inputs/inputs";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { TextArea } from "../../../forms/Inputs/TextArea";
import { DateInput } from "../../../forms/Inputs/datePicker";

export const AddEventModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addEvent">
            <AddEventForm />
        </ModalTemplate>
    );
}

const AddEventForm: React.FC = () => {

    const { selected_server } = useServer();

    const api_function = (data: any) => {
        create_event(selected_server.id, data);
    }
    const { onSubmit, register, isLoading } = useCustomFormModal(api_function);

    return (
        <div className="h-full flex flex-col gap-5 justify-center items-center">

            <div className="flex flex-row gap-5 justify-center items-center">
                <CalendarIcon size={40} color="white" />
                <p className="text-2xl text-custom_white text-center">Detalles sobre tu evento</p>
            </div>

            <form
                onSubmit={onSubmit}
                className="w-full flex flex-col justify-center items-center gap-5 overflow-y-auto px-1">

                <div className="w-[320px]">
                    <InputsForms title="Tema del evento" register={register} name="name" placeholder="¿De qué trata tu evento?" />
                </div>

                <TextArea title="Descripción del evento" placeholder="Cuéntales a los miembros del servidor de qué trata el evento." name="description" register={register} />

                <div className="w-full">
                    <DateInput
                        title="Fecha del evento" placeholder="Selecciona la fecha de tu evento"
                        name="date"
                        register={register}
                    />
                </div>

                <div className="w-[320px]">
                    <SubmitButton text="Guardar " isLoading={isLoading} />
                </div>
            </form>
        </div>
    );
};
