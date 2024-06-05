import { InputsForms } from "../../../forms/Inputs/inputs";
import { TextArea } from "../../../forms/Inputs/TextArea"
import { useCustomForm } from "../../../../hooks/useForm";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";


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

export const EditProfileModal: React.FC = () => {

    return (
        <div className="w-full flex justify-center items-center">

            <div className="w-full max-w-[320px] flex flex-col gap-5 m-5 h-auto">

                <div className="flex flex-row items-center justify-between w-full">

                    <div className="w-1/2">
                        <EditProfilePicture />
                    </div>

                    <div className="w-1/2">
                        <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
                            <p className="text-3xl text-custom_white ">{user.name}</p>
                            <p className="text-md text-gray ">{user.username}</p>
                        </div>
                    </div>

                </div>

                <EditProfileForm />

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
                    <HiPencil className="text-3xl text-custom_white" />
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

        <form className="w-full flex flex-col gap-5 overflow-y-auto px-1">

            <InputsForms title="Nombre" register={register} name="name" placeholder="Nombre a mostrar" />

            <TextArea title="Sobre mí" name="aboutMe" placeholder="Agrega una genial descripción" register={register} />

            <SubmitButton text="Guardar cambios" isLoading={isLoading} />
        </form>
    )
}