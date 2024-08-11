import { events } from "./mock/events";

import { EventsList } from "./eventsList";
import { NoEvents } from "./noEvents";

import { ModalTemplate } from "../../ModalTemplate";
import { AddEventModal } from "./addEventModal";


export const EventsModal: React.FC = () => {
    return (
        <div>
            <ModalTemplate identificator="events">
                {events.length === 0 ? <NoEvents /> : <EventsList eventsList={events} />}
            </ModalTemplate>

            <AddEventModal />
        </div>
    );
};




