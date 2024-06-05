import { HiCalendarDays } from "react-icons/hi2";
import { FaClock } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";


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
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row p-4 gap-5 justify-center items-center">
                <HiCalendarDays className="text-custom_white text-4xl" />
                <p className="text-2xl text-custom_white">Tus eventos</p>
            </div>
            {events && events.map((event, index) => (
                <div className="flex flex-col bg-overlay_2 p-3 rounded-xl w-4/5 mx-auto gap-5" key={index}>

                    <div className="flex flex-row items-center gap-5">
                        <FaTasks size={20} fill="white" />
                        <p className="text-xl text-custom_white font-almarai">{event.name}</p>
                    </div>

                    <div className="w-full flex flex-row items-center">

                        <div className="w-full flex flex-row gap-5 items-center">
                            <FaClock size={20} fill="white" />
                            <p className="text-xl text-custom_white font-almarai">{event.eventDate}</p>
                        </div>

                        <SubmitButton text="Finalizar evento" isLoading={false} />

                    </div>
                </div>
            ))}
        </div>
    );
};

const NoEvents: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-10 justify-center items-center">

            <div className="flex flex-col items-center rounded-lg bg-overlay_2 h-1/3 justify-evenly gap-5 p-4">
                <HiCalendarDays className="text-6xl text-custom_white" />
                <h1 className="text-3xl text-custom_white font-almarai">
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
