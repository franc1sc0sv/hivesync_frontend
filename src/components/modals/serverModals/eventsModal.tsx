import { CalendarIcon } from "../../Icons/calendar";
import { TaskIcon } from "../../Icons/task";
import { ClockIcon } from "../../Icons/clock";
import { AddIcon } from "../../Icons/add";


import { SubmitButton } from "../../forms/Inputs/Button";

import { ModalTemplate } from "../ModalTemplate";
import { useModal } from "../../../store/useModal";
import { AddEventModal } from "./addEventModal";

interface EventsProps {
    name: string,
    description: string,
    eventDate: string
}

const events: EventsProps[] = [
    // {
    //     name: "Evento calidad",
    //     description: "si",
    //     eventDate: "22-05-24"
    // },
    // {
    //     name: "Evento calidad",
    //     description: "si",
    //     eventDate: "22-05-24"
    // },
    // {
    //     name: "Evento calidad",
    //     description: "si",
    //     eventDate: "22-05-24"
    // },
    // {
    //     name: "Evento calidad",
    //     description: "si",
    //     eventDate: "22-05-24"
    // },
];

export const EventsModal: React.FC = () => {
    return (
        <div>
            <ModalTemplate identificator="events">
                {events.length === 0 ? <NoEvents /> : <Events />}
            </ModalTemplate>

            <AddEventModal />

        </div>


    );
};

export const Events: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-10">
            <div className="flex p-4 gap-5 justify-around items-center">

                <div className="flex flex-row justify-center items-center gap-5">
                    <CalendarIcon size={40} color="white" />
                    <p className="text-2xl text-custom_white">Tus eventos</p>
                </div>
                
                {/* add event button */}
                <div onClick={() => setModalId("addEvent")} >
                    <AddIcon size={40} color="white" />
                </div>
            </div>
            {
                events && events.map((event, index) => (
                    <div className="flex flex-col bg-overlay_2 p-3 rounded-xl w-4/5 mx-auto gap-5" key={index}>

                        <div className="flex flex-row items-center gap-5">
                            <TaskIcon size={20} color="white" />
                            <p className="text-xl text-custom_white font-almarai">{event.name}</p>
                        </div>

                        <div className="w-full flex flex-row items-center">

                            <div className="w-full flex flex-row gap-5 items-center">
                                <ClockIcon size={20} color="white" />
                                <p className="text-xl text-custom_white font-almarai">{event.eventDate}</p>
                            </div>

                            <SubmitButton text="Finalizar evento" isLoading={false} />

                        </div>
                    </div>
                ))
            }
        </div >
    );
};

const NoEvents: React.FC = () => {

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
