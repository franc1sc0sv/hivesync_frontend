import { CalendarIcon } from "../../../Icons/calendar";
import { useModal } from "../../../../store/useModal";
import { useServer } from "../../../layouts/ServerLayout/hooks/useServer";
import { RiArrowRightSLine } from "react-icons/ri";
import { delete_event } from "../../../../api/server";
import { useNotifications } from "../../../../store/useNotifications";

interface EventInfoProps {
    id: string,
    name: string,
    description: string,
    date: string
}

interface EventProps {
    eventsList: EventInfoProps[]
}

export const EventsList: React.FC<EventProps> = ({ eventsList }) => {
    return (
        <List eventsList={eventsList} />
    )
}

const List: React.FC<EventProps> = ({ eventsList }) => {

    const { selected_server } = useServer();
    const { setModalId } = useModal();
    const { setNotifications } = useNotifications();


    const handleDelete = async (data: any) => {
        try {
            const res = await delete_event(selected_server.id, { event: data });
            setNotifications({
                message: "Evento finalizado",
                severity: "success",
            });
            return setModalId("");

        }
        catch (error) {
            console.error("Error al eliminar el evento", error);
        }
    };

    return (
        <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto">

            <div className="w-full flex flex-col  sm:flex-row justify-between lg:justify-around items-center my-5">
                <p className="text-center text-custom_white text-2xl lg:text-3xl">Próximos eventos</p>
                <button
                    onClick={() => setModalId("addEvent")}
                    className="flex justify-center items-center gap-3">
                    <CalendarIcon color="white" size={30} />
                    <p className="text-custom_white text-lg sm:text-xl">Agregar evento</p>
                </button>
            </div>
            <ol
                className="relative border-s-2 border-custom_white">
                {eventsList.map((event) => (
                    <li
                        key={event.id}
                        className="mb-10 ms-4">

                        <div className="bg-light_purple absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -start-3"></div>

                        <div
                            className="w-full flex flex-row flex-wrap justify-between">
                            <div className="w-full sm:w-3/5">
                                <time className="mb-1 text-lg text-gray">
                                    {event.date.split("T")[0]}
                                </time>
                                <h3 className="text-2xl font-semibold text-custom_white ">
                                    {event.name}
                                </h3>
                                <p className="mb-4 text-base font-normal text-gray">
                                    {event.description}
                                </p>
                            </div>

                            <div className="w-full sm:w-auto flex justify-center items-center">
                                <button
                                    onClick={() => handleDelete(event.id)}
                                    type="submit"
                                    className={`flex items-center h-14 w-full p-3 font-bold bg-primary rounded-xl justify-between text-custom_white font-almarai mx-auto`}
                                >
                                    <p>Finalizar evento</p>
                                    <RiArrowRightSLine size={28} />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
