import { SubmitButton } from "../../../forms/Inputs/Button";


interface EventInfoProps {
    name: string,
    eventDate: string
    description: string
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
    return (
        <div className="w-full lg:w-4/5 mx-auto">
            <p className="text-center text-custom_white text-2xl">Próximos eventos</p>
            <ol
                className="relative border-s-2 border-custom_white">
                {eventsList.map((event, index) => (
                    <li
                        key={index}
                        className="mb-10 ms-4">

                        <div className="bg-light_purple absolute w-5 h-5 bg-gray-200 rounded-full mt-1.5 -start-3"></div>

                        <div className="w-full flex flex-row flex-wrap justify-between">
                            <div className="w-3/5">
                                <time className="mb-1 text-lg text-gray">
                                    {event.eventDate}
                                </time>
                                <h3 className="text-2xl font-semibold text-custom_white ">
                                    {event.name}
                                </h3>
                                <p className="mb-4 text-base font-normal text-gray">
                                    {event.description}
                                </p>
                            </div>

                            <div className="w- flex justify-center items-center">
                                <SubmitButton text="Finalizar" isLoading={false} />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}