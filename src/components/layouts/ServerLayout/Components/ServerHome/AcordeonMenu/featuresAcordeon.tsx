import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";

interface Channel {
    id: string | number;
    name: string;
    onClick: () => void;
    icon: IconType;
}

interface AccordionProps {
    name: string;
    channels: Channel[];
}

export const ServerFeaturesAccordion: React.FC<AccordionProps> = ({ name, channels }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="flex flex-col gap-3">
            {/* Encabezado del acordeón */}
            <div
                className="flex items-center gap-2 font-medium text-custom_white font-almarai cursor-pointer"
                onClick={toggleAccordion}
            >
                <IoIosArrowForward
                    className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                    size={20}
                />
                <p>{name}</p>
            </div>

            {/* Lista de canales */}
            {isOpen && (
                <div className="flex flex-col pl-6">
                    {channels.map((channel) => (
                        <div
                            key={channel.id}
                            onClick={channel.onClick}
                            className="cursor-pointer transition-all flex gap-2 items-center p-2 rounded-overlay text-custom_white"
                        >
                            {<channel.icon size={30} />}
                            <p>{channel.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
