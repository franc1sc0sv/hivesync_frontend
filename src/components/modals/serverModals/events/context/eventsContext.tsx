import { useContext, createContext, useState, useEffect } from "react";
import { useFetch } from "../../../../../hooks/useFetch";
import { useServer } from "../../../../layouts/ServerLayout/hooks/useServer";
import { LoadingPage } from "../../../../routes/loadingPage";
import { get_all_events_by_server } from "../../../../../api/server";
import { useModal } from "../../../../../store/useModal";


interface EventsProps {
    serverId: string;
    id: string
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
    isLoading: true,
});

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
    const { selected_server } = useServer();
    const { modalId } = useModal();

    const { isLoading, fecthData } = useFetch({
        api_function: () => get_all_events_by_server(selected_server.id)
    });

    const [events, setEvents] = useState<EventsProps[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsList = await fecthData();

                const validEventsList = Array.isArray(eventsList) ? eventsList : [];

                const transformedEvents = validEventsList.map((event: EventsProps) => ({
                    ...event,
                    eventDate: event.date.split("T")[0],
                }));

                setEvents(transformedEvents);
            } catch (error) {
                console.error("Error fetching events", error);
            }
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

