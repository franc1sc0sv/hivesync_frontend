import { useModal } from "../../../../store/useModal";
import { CalendarIcon } from "../../../Icons/calendar";
import { SubmitButton } from "../../../forms/Inputs/Button";

export const NoEvents: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-10 justify-center items-center">

            <div className="flex flex-col items-center rounded-lg bg-overlay_2 h-1/3 justify-evenly gap-5 p-4">
                <CalendarIcon size={60} color="white" />
                <h1 className="text-3xl text-custom_white font-almarai text-center">
                    No hay eventos próximamente
                </h1>
                <p className="text-xl text-center text-custom_white">
                    Programa un evento para cualquier actividad planeada en tu servidor.
                </p>
            </div>

            <div className="w-full" onClick={() => setModalId("addEvent")}>
                <SubmitButton text="Crear evento" isLoading={false} />
            </div>
        </div>


    );
};