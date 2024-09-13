import { EventsList } from "./eventsList";
import { NoEvents } from "./noEvents";
import { ModalTemplate } from "../../ModalTemplate";
import { AddEventModal } from "./addEventModal";

import { EventsProvider, useEventsList} from "./context/eventsContext"; 
import { LoadingPage } from "../../../routes/loadingPage";

export const EventsModal: React.FC = () => {
    return (
        <div>
            <EventsProvider>
                <Events />
            </EventsProvider>
            <AddEventModal />
        </div>
    );
};

const Events: React.FC = () => {

    const { events, isLoading } = useEventsList();
    
    if (isLoading) return <LoadingPage />

    return (
        <ModalTemplate identificator="events">
            {events?.length === 0 ? <NoEvents /> : <EventsList eventsList={events || []} />}
        </ModalTemplate>
    )
}
