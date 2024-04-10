import { NavBar } from "../../../components/layout/user/navBar";
import { FaAngleDown } from "react-icons/fa";
import { EditProfileOption } from "../../../components/buttons/EditProfileOption";
import { ProfileConnections } from "./ProfileConnections";


// testing data
const temporaryRoute = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

interface User {
    username: string;
    about: string;
    memberSince: string,
    spotify: boolean,
    github: boolean
}

const user: User = {
    username: "Trabis",
    about: "En efecto, es una prueba",
    memberSince: "21 de septiembre de 2005",
    spotify: true,
    github: true
}



export const ProfilePage: React.FC = () => {
    return (
        <>
            <div className="md:hidden lg:hidden h-screen w-full bg-overlay_1 flex flex-col justify-between">

                {/* cover */}
                <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto my-5 rounded-lg text-gray-900">

                    {/* cover  */}
                    <div className="rounded-xl h-36 overflow-hidden bg-primary">
                    </div>

                    {/* icon */}
                    <div className="mx-auto w-32 h-32 relative border-4 border-overlay_2 -mt-20 rounded-full overflow-hidden">
                        <img className="w-full h-full rounded-full object-cover object-center" src={temporaryRoute} alt="Profile picture" />
                    </div>

                </div>

                {/* content container */}
                <div className="h-[60%] flex flex-col gap-5 overflow-y-auto">
                    {/* Main profile options */}

                    <div className="flex flex-col bg-overlay_2 mx-5 rounded-lg ">

                        <div className="flex flex-row items-center gap-3 p-3 mx-3">
                            <h1 className="text-2xl text-custom_white ">{user.username}</h1>
                            <FaAngleDown className="text-custom_white text-xl" />
                        </div>

                        <div className="my-3 w-full flex flex-row justify-evenly items-center">
                            <div className="w-auto">
                                <EditProfileOption title="Añadir estado" option={true} />

                            </div>

                            <div className="w-auto">
                                <EditProfileOption title="Editar perfil" option={false} />

                            </div>
                        </div>

                    </div>

                    {/* user info */}
                    <div className="flex flex-col bg-overlay_2 mx-5 rounded-lg ">

                        <div className="flex flex-col  gap-3 p-3 mx-3 text-custom_white">
                            <h3 className="text-lg">Sobre mi</h3>
                            <p className="text-gray">{user.about}</p>
                        </div>

                        <div className="flex flex-col  gap-3 p-3 mx-3 text-custom_white">
                            <h3 className="text-lg">Miembro de HiveSync desde</h3>
                            <p className="text-gray">{user.memberSince}</p>
                        </div>
                    </div>

                    {/* connections */}
                    <ProfileConnections spotifyLinked={true} spotifyUsername="Trabis_spotify" githubLinked={true} githubUsername="Trabis_github" />


                    {/* your friends */}
                    <div className="flex flex-row bg-overlay_2 justify-around items-center mx-5 rounded-lg p-3">
                        <h1 className="text-custom_white">Tus amigos</h1>

                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover object-center" src={temporaryRoute} alt="Friend Profile picture" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray- object-cover object-center" src={temporaryRoute} alt="Friend Profile picture" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover object-center" src={temporaryRoute} alt="Friend Profile picture" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover object-center" src={temporaryRoute} alt="Friend Profile picture" />
                        </div>

                    </div>
                </div>



                <NavBar />
            </div >

        </>
    );
}