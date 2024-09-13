import { useContext, createContext, useState, useEffect } from "react";
import { useFetch } from "../../../../../hooks/useFetch";
import { useServer } from "../../../../layouts/ServerLayout/hooks/useServer";
import { LoadingPage } from "../../../../routes/loadingPage";
import { get_all_events_by_server } from "../../../../../api/server";
import { useModal } from "../../../../../store/useModal";


interface EventsProps {
    serverId: string;
    name: string;
    description: string;
    date: string;
}

interface EventContextType {
    events: EventsProps[];
    isLoading: boolean;
}

const EventContext = createContext<EventContextType | null>({
    events: [],
    isLoading: true
});

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
    const { selected_server } = useServer();
    const {modalId} = useModal();

    const { isLoading, fecthData } = useFetch({
        api_function: () => get_all_events_by_server(selected_server.id)
    });

    const [events, setEvents] = useState<EventsProps[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsList = await fecthData();
            console.log(eventsList);

            // Transformar los datos antes de guardarlos en el estado, garantizando que eventDate sea un string
            const transformedEvents = eventsList.map((event: EventsProps) => ({
                ...event,
                eventDate: event.date.split("T")[0]
            }));

            setEvents(transformedEvents);

            if (!eventsList?.length) return;
        };

        fetchEvents();
    }, [modalId]);



    if (isLoading) return <LoadingPage />;

    return (
        <EventContext.Provider value={{ events, isLoading }}>
            {children}
        </EventContext.Provider>
    );
};


export const useEventsList = () => {
    const context = useContext(EventContext);
    return { ...context };
};