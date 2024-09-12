import { useContext, createContext, useState, useEffect } from "react";
import { useFetch } from "../../../../../hooks/useFetch";
import { useServer } from "../../../../layouts/ServerLayout/hooks/useServer";
import { LoadingPage } from "../../../../routes/loadingPage";
import { get_all_events_by_server } from "../../../../../api/server";


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

export const EventContext = createContext<EventContextType | null>(null);

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
    const { selected_server } = useServer();

    const { isLoading, fecthData } = useFetch({
        api_function: () => get_all_events_by_server(selected_server.id)
    });

    const [events, setEvents] = useState<EventsProps[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsList = await fecthData();
            console.log(eventsList)

            // Transformar los datos antes de guardarlos en el estado, garantizando que eventDate sea un string
            const transformedEvents = eventsList.map((event: EventsProps) => ({
                ...event,
                eventDate: event.date.split("T")[0]
            }));
            setEvents(transformedEvents);

            if (!eventsList?.length) return;
        };

        fetchEvents();
    }, [selected_server]);

    if (isLoading) return <LoadingPage />;

    return (
        <EventContext.Provider value={{ events, isLoading }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventsList = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error("useEventsList must be used within an EventsProvider");
    }
    return { ...context };
};
