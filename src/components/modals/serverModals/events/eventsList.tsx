import { CalendarIcon } from "../../../Icons/calendar";
import { useModal } from "../../../../store/useModal";
import { useServer } from "../../../layouts/ServerLayout/hooks/useServer";
import { useEventsList } from "./context/eventsContext";
import { useNotifications } from "../../../../store/useNotifications";
import { delete_event } from "../../../../api/events";
import { PencilIcon } from "../../../Icons/pencil";
import { CheckIcon } from "../../../Icons/check";

interface EventInfoProps {
  id: string;
  name: string;
  description: string;
  date: string;
}

interface EventProps {
  eventsList: EventInfoProps[];
}

export const EventsList: React.FC<EventProps> = ({ eventsList }) => {
  return <List eventsList={eventsList} />;
};

const List: React.FC<EventProps> = ({ eventsList }) => {
  const { selected_server } = useServer();
  const { setModalId } = useModal();
  const { setNotifications } = useNotifications();
  const { setSelectedEventId, fetchEvents } = useEventsList();

  const handleDelete = async (data: any) => {
    try {
      await delete_event(selected_server.id, { event: data });
      setNotifications({
        message: "Evento finalizado",
        severity: "success",
      });
      fetchEvents();
      return setModalId("");
    } catch (error) {
      console.error("Error al eliminar el evento", error);
    }
  };

  return (
    <div className="w-full mx-auto sm:w-4/5 lg:w-3/5">
      <div className="flex flex-col items-center justify-between w-full my-5 sm:flex-row lg:justify-around">
        <p className="text-2xl text-center text-custom_white lg:text-3xl">
          Próximos eventos
        </p>
        <button
          onClick={() => setModalId("addEvent")}
          className="flex items-center justify-center gap-3"
        >
          <CalendarIcon color="white" size={30} />
          <p className="text-lg text-custom_white sm:text-xl">Agregar evento</p>
        </button>
      </div>
      <ol className="relative border-s-2 border-custom_white">
        {/* {eventsList.map((event) => (
                    <li
                        key={event.id}
                        className="mb-10 ms-4">

                        <div className="bg-light_purple absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -start-3"></div>

                        <div
                            className="flex flex-row flex-wrap justify-between w-full sm:flex-nowrap">
                            <div className="w-full sm:w-1/2">
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

                            <div className="flex flex-row items-center justify-center w-full gap-3 sm:w-auto sm:justify-between">
                                <button
                                onClick={() => {
                                    setSelectedEventId(event.id);
                                    setModalId("editEvent");
                                }}
                                    type="submit"
                                    className={`flex items-center h-14 w-full p-2 font-bold bg-primary rounded-xl justify-between text-custom_white font-almarai mx-auto text-center gap-3`}
                                >
                                    <p>Editar</p>
                                    <PencilIcon size={25} color="#fff" />
                                </button>

                                <button
                                    onClick={() => handleDelete(event.id)}
                                    value={event.date}
                                    type="submit"
                                    className={`flex items-center h-14 w-full p-2 font-bold bg-light_purple rounded-xl justify-between text-custom_white font-almarai mx-auto text-center gap-3`}
                                >
                                    <p>Finalizar</p>
                                    <CheckIcon size={20} color="#fff" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))} */}

        {eventsList
          .sort() // Ordena de la fecha más cercana a la más lejana
          .map((event) => (
            <li key={event.id} className="mb-10 ms-4">
              <div className="bg-light_purple absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -start-3"></div>
              <div className="flex flex-row flex-wrap justify-between w-full sm:flex-nowrap">
                <div className="w-full sm:w-1/2">
                  <time className="mb-1 text-lg text-gray">
                    {event.date.split("T")[0]}{" "}
                    {/* Muestra solo la fecha sin la hora */}
                  </time>
                  <h3 className="text-2xl font-semibold text-custom_white">
                    {event.name}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray">
                    {event.description}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center w-full gap-3 sm:w-auto sm:justify-between">
                  <button
                    onClick={() => {
                      setSelectedEventId(event.id);
                      setModalId("editEvent");
                    }}
                    type="submit"
                    className={`flex items-center h-14 w-full p-2 font-bold bg-primary rounded-xl justify-between text-custom_white font-almarai mx-auto text-center gap-3`}
                  >
                    <p>Editar</p>
                    <PencilIcon size={25} color="#fff" />
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    value={event.date}
                    type="submit"
                    className={`flex items-center h-14 w-full p-2 font-bold bg-light_purple rounded-xl justify-between text-custom_white font-almarai mx-auto text-center gap-3`}
                  >
                    <p>Finalizar</p>
                    <CheckIcon size={20} color="#fff" />
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};
