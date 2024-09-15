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

export const ServerFeaturesAccordion: React.FC<AccordionProps> = ({ channels }) => {

    return (
        <section className="flex flex-col gap-1">
            <div className="flex flex-col gap-5 p-2">
                {channels.map((channel) => (
                    <div
                        key={channel.id}
                        onClick={channel.onClick}
                        className="flex items-center gap-2 transition-all cursor-pointer rounded-overlay text-custom_white"
                    >
                        {<channel.icon size={30} />}
                        <p>{channel.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
