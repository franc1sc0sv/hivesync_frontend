import { useModal } from "../../../../store/useModal";

import { CalendarIcon } from "../../../Icons/calendar";
import { AddIcon } from "../../../Icons/add";
import { TaskIcon } from "../../../Icons/task";
import { ClockIcon } from "../../../Icons/clock";

import { SubmitButton } from "../../../forms/Inputs/Button";

interface EventInfoProps {
    name: string,
    eventDate: string
}

interface EventProps {
    eventsList: EventInfoProps[]
}

export const EventsList: React.FC<EventProps> = ({eventsList}) => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-5 justify-around items-center">

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
                eventsList && eventsList.map((event, index) => (
                    <div className="w-full flex flex-col bg-overlay_2 p-3 rounded-xl  mx-auto gap-5" key={index}>

                        <div className="flex flex-row items-center justify-between gap-5">

                            <div className="flex flex-row justify-center items-center gap-5">
                                <TaskIcon size={20} color="white" />
                                <p className="text-xl text-custom_white font-almarai">{event.name}</p>
                            </div>

                            <div className="flex justify-center items-center ">
                                <SubmitButton text="Finalizar" isLoading={false} />

                            </div>
                        </div>

                        <div className="w-full flex flex-row items-center">

                            <div className="w-full flex flex-row gap-5 items-center">
                                <ClockIcon size={20} color="white" />
                                <p className="text-xl text-custom_white font-almarai">{event.eventDate}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};