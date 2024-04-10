import { NavBar } from "../../../components/layout/user/navBar";
import { FaAngleDown } from "react-icons/fa";
import { EditProfileOption } from "../../../components/buttons/EditProfileOption";


// testing data
const temporaryRoute = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";


export const ProfilePage = () => {
    return (
        <>
            <div className="md:hidden lg:hidden h-screen w-full bg-overlay_1 flex flex-col justify-between">

                {/* cover */}
                <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto my-5 rounded-lg text-gray-900">

                    {/* cover  */}
                    <div className="rounded-t-lg h-32 overflow-hidden">
                        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                    </div>

                    {/* icon */}
                    <div className="mx-auto w-32 h-32 relative border-4 border-overlay_2 -mt-16 rounded-full overflow-hidden">
                        <img className="w-full h-full rounded-full object-cover object-center" src={temporaryRoute} alt="Profile picture" />
                    </div>

                </div>


                {/* Main profile options */}

                <div className="flex flex-col bg-overlay_2 mx-5 rounded-lg ">

                    <div className="flex flex-row items-center gap-3 p-3 mx-3">
                        <h1 className="text-2xl text-custom_white ">UserName</h1>
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

                <NavBar />
            </div >

        </>
    );
}