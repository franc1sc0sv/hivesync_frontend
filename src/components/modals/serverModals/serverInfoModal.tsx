import { ModalTemplate } from "../ModalTemplate";
import { AddServerMembersModal } from "./addServerMemberModal";
import { useModal } from "../../../store/useModal";

import { UserAddIcon } from "../../Icons/userAdd";
import { BellIcon } from "../../Icons/bell";
import { SettingsIcon } from "../../Icons/settings";
import { CalendarIcon } from "../../Icons/calendar";
import { WarningIcon } from "../../Icons/warning";
import { FolderIcon } from "../../Icons/folder";
import { CategoryIcon } from "../../Icons/category";

interface MenuProps {
    icon: React.ReactNode;
    name: string;
    // modal: React.ReactNode
}

const quickOptions: MenuProps[] = [
    {
        icon: <UserAddIcon size={30} color="white" />,
        name: "Invitar miembros",
        // modal: <AddServerMembersModal />
    },
    {
        icon: <BellIcon size={30} color="white" />,
        name: "Notificaciones",
        // modal: <AddServerMembersModal />
    },
    {
        icon: <SettingsIcon size={30} color="white" />,
        name: "Ajustes",
        // modal: <AddServerMembersModal />
    }
];

const serverOptions: MenuProps[] = [
    {
        icon: <FolderIcon size={30} color="white" />,
        name: "Crear canal",
        // modal: <AddServerMembersModal />
    },
    {
        icon: <CategoryIcon size={30} color="white" />,
        name: "Crear categoría",
        // modal: <AddServerMembersModal />
    },
    {
        icon: <CalendarIcon size={30} color="white" />,
        name: "Crear evento",
        // modal: <AddServerMembersModal />
    }
];

const serverReports: MenuProps[] = [
    {
        icon: <WarningIcon size={30} color="white" />,
        name: "Denunciar ataque",
        // modal: <AddServerMembersModal />
    },
    {
        icon: <WarningIcon size={30} color="white" />,
        name: "Denunciar servidor",
        // modal: <AddServerMembersModal />
    },
];

const temporaryRoute =
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";


export const ServerInfoModal: React.FC = () => {
    return (
        <ModalTemplate identificator="serverInfo">
            <ServerInfo />
        </ModalTemplate>
    );
}

const ServerInfo: React.FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <ServerCover />
            <ServerDetails />
            {/* <ServerButtons /> */}
            <ServerOptions />
        </div>
    )
}

const ServerCover: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="max-w-2xl text-gray-900 rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                {/* cover  */}
                <div className="relative overflow-hidden rounded-xl h-36 bg-primary"></div>

                {/* icon */}
                <div className="absolute w-28 h-28 ml-5 md:mx-auto -mt-20 overflow-hidden rounded-2xl">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={temporaryRoute}
                        alt="Profile picture"
                    />
                </div>
            </div>
        </div>

    )
}

const ServerDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 pl-5">
            <p className="font-almarai text-2xl text-custom_white font-bold">El server de AlmightyTgc</p>

            <div className="flex flex-row gap-5">

                <div className="flex flex-row gap-2 items-center">
                    <div className="rounded-full w-3 h-3 p-1 bg-green"></div>
                    <p className="text-custom_white text-almarai text-lg">350 en línea</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <div className="rounded-full w-3 h-3 p-1 bg-gray"></div>
                    <p className="text-custom_white text-almarai text-lg">1500 miembros</p>
                </div>
            </div>
        </div>
    )
}

const ServerOptions = () => {
    return (
        (
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                    {quickOptions.map((option, index) => (
                        <div
                            className="flex flex-row items-center gap-3"
                            key={index}
                            // onClick={option.modal}
                        >
                            <div>
                                <div className="p-2 text-3xl text-custom_white rounded-xl">
                                    {option.icon}
                                </div>
                            </div>
                            <p className="text-custom_white">{option.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                    {serverOptions.map((option, index) => (
                        <div
                            className="flex flex-row items-center gap-3"
                            key={index}
                            // onClick={option.modal}
                        >
                            <div>
                                <div className="p-2 text-3xl text-custom_white rounded-xl">
                                    {option.icon}
                                </div>
                            </div>
                            <p className="text-custom_white">{option.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                    {serverReports.map((option, index) => (
                        <div
                            className="flex flex-row items-center gap-3"
                            key={index}
                            // onClick={option.modal}
                        >
                            <div>
                                <div className="p-2 text-3xl text-custom_white rounded-xl">
                                    {option.icon}
                                </div>
                            </div>
                            <p className="text-custom_white">{option.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        )
    )
}