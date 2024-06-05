import { ModalTemplate } from "../ModalTemplate";
import { AddServerMembersModal } from "./addServerMemberModal";
import { useModal } from "../../../store/useModal";

import { HiUserAdd } from "react-icons/hi";
import { HiMiniBell } from "react-icons/hi2";
import { HiCog } from "react-icons/hi";

import { MdCreateNewFolder } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { HiCalendarDays } from "react-icons/hi2";
import { IoIosWarning } from "react-icons/io";


interface MenuProps {
    icon: React.ReactNode;
    optionName: string;
    goTo: () => void
}

const MenuOptions1: MenuProps[] = [
    { icon: <MdCreateNewFolder />, optionName: "Crear canal", goTo: () => console.log("función")},
    { icon: <BiSolidCategory />, optionName: "Crear categoría", goTo: () => ("función") },
    { icon: <HiCalendarDays />, optionName: "Crear evento", goTo: () => console.log("función") }
];

const MenuOptions2: MenuProps[] = [
    { icon: <IoIosWarning />, optionName: "Denunciar ataque", goTo: () => console.log("función") },
    { icon: <IoIosWarning />, optionName: "Denunciar servidor", goTo: () => console.log("función") },
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
            <ServerButtons />
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

const ServerButtons: React.FC = () => {

    const { setModalId } = useModal();

    return (
        <div className="flex flex-row gap-10 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
                <button className="p-2  rounded-full w-max bg-overlay_1" onClick={() => setModalId("addServerMembers")}>
                    <HiUserAdd size={45} className="fill-white bg-primary p-1 rounded-lg" />
                </button>
                <p className="font-almarai text-sm text-center text-custom_white">Invitar</p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
                <button className="p-2  rounded-full w-max bg-overlay_1">
                    <HiMiniBell size={45} className="fill-white bg-primary p-1 rounded-lg" />
                </button>
                <p className="font-almarai text-sm text-center text-custom_white">Notificaciones</p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
                <button className="p-2  rounded-full w-max bg-overlay_1">
                    <HiCog size={45} className="fill-white bg-primary p-1 rounded-lg" />
                </button>
                <p className="font-almarai text-sm text-center text-custom_white">Ajustes</p>
            </div>

            <AddServerMembersModal />
        </div>
    )
}

const ServerOptions = () => {
    return (
        (
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                    {MenuOptions1.map((option, index) => (
                        <div
                            className="flex flex-row items-center gap-3"
                            key={index}
                            onClick={option.goTo}
                        >
                            <div>
                                <div className="p-2 text-3xl bg-gray text-custom_white rounded-xl">
                                    {option.icon}
                                </div>
                            </div>
                            <p className="text-custom_white">{option.optionName}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
                    {MenuOptions2.map((option, index) => (
                        <div
                            className="flex flex-row items-center gap-3"
                            key={index}
                            onClick={option.goTo}
                        >
                            <div>
                                <div className="p-2 text-3xl bg-gray text-custom_white rounded-xl">
                                    {option.icon}
                                </div>
                            </div>
                            <p className="text-custom_white">{option.optionName}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}