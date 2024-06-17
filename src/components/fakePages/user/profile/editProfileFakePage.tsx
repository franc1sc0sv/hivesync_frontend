//modal utils
import { useModal } from "../../../../store/useModal";
import { EditPictureOrCoverModal } from "../../../modals/userModals/profile/EditPictureOrCoverModal";

import { useState } from "react";

//form utils
import { useCustomForm } from "../../../../hooks/useForm";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { InputsForms } from "../../../forms/Inputs/inputs";
import { TextArea } from "../../../forms/Inputs/TextArea";

//icons
import { PencilIcon } from "../../../Icons/pencil";


const temporaryRoute =
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

interface User {
    username: string;
    about: string;
    name: string;
    memberSince: string;
    spotify: boolean;
    github: boolean;
}

const user: User = {
    name: "FJ",
    username: "franc1sc0_sv",
    about: "En efecto, es una prueba",
    memberSince: "21 de septiembre de 2005",
    spotify: true,
    github: true,
};


// componente activado en UserInformation 

export const EditProfileFakePage: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center items-center rounded-xl">
            <div className="w-full max-w-[320px] flex flex-col gap-5 m-5 h-auto">
                <ProfileCover />
                <UserInformation />
                <EditProfileForm />
                <EditPictureOrCoverModal />
            </div>
        </div>
    )
}



const ProfileCover: React.FC = () => {

    const {setModalId} = useModal();

    return (

        <div className="max-w-2xl text-gray-900 rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
            {/* cover  */}
            <div className="relative overflow-hidden rounded-xl h-36 bg-primary">
                {/* edit cover theme */}
                <EditCoverThemeButton />
            </div>

            {/* edit profile picture modal */}
            <div 
            className="relative w-24 h-24 ml-5 -mt-20 overflow-hidden rounded-2xl" 
            onClick={() => setModalId("editProfilePicture")}
            >
                <img
                    className="object-cover object-center w-full h-full"
                    src={temporaryRoute}
                    alt="Profile picture"
                />
                <span className="absolute bottom-0 right-0 left-15 w-10 h-10 transition duration-300 bg-overlay_2 hover:bg-primary border border-white dark:border-gray-800 rounded-full z-10">
                    <div className="absolute bottom-1 right-1 cursor-pointer">
                        <PencilIcon size={30} color="white" />
                    </div>
                </span>
            </div>

        </div>

    )
}

const EditCoverThemeButton: React.FC = () => {
    const {setModalId} = useModal();
    return (
        <div className="absolute top-0 right-0 p-3" onClick={() => setModalId("editCoverTheme")}>
            <PencilIcon size={30} color="white" />
        </div>
    )
}

const UserInformation: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
                <p className="text-3xl text-custom_white text-start">{user.name}</p>
                <p className="text-md text-gray text-start">{user.username}</p>
            </div>
        </div>
    )
}

const EditProfilePicture: React.FC = () => {


    const [file, setFile] = useState<File | undefined>(undefined)

    return (
        <div className="relative w-28 h-28 mx-auto">
            <img className=" w-full h-full rounded-full object-cover object-center" src={temporaryRoute} alt="Profile picture" />

            <span className={`bottom-0 right-1 absolute w-10 h-10 transition duration-300
                bg-overlay_2 hover:bg-primary border border-white dark:border-gray-800 rounded-full`}>
                <label className="absolute bottom-1 right-1 cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => { setFile(e.target.files?.[0]); }}
                    />
                    <PencilIcon size={30} color="white" />
                </label>
            </span>
        </div>
    )
}


const EditProfileForm: React.FC = () => {

    const api_function = () => console.log("*llama a api épicamente*")

    const post_success_function = () => console.log("la api se llamó exitosamente")

    const { register, isLoading } = useCustomForm(api_function, post_success_function, "")


    return (

        <form className="w-full flex flex-col gap-5 overflow-y-auto px-1 text-start ">
            <InputsForms title="Nombre" register={register} name="name" placeholder="Nombre a mostrar" />
            <TextArea title="Sobre mí" name="aboutMe" placeholder="Agrega una genial descripción" register={register} />
            <SubmitButton text="Guardar cambios" isLoading={isLoading} />
        </form>
    )
}