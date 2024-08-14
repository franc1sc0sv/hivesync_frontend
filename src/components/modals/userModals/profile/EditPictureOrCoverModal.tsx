import { ModalTemplate } from "../../ModalTemplate";

import { AnimatePresence, motion } from "framer-motion";


import { useState } from "react";

import { useCustomForm } from "../../../../hooks/useForm";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { ColorPickerInput } from "../../../forms/Inputs/ColorPicker";
import { SubmitButton } from "../../../forms/Inputs/Button";

//mock
import { userData } from "../../../../pages/User/mocks/userData";


export const EditPictureOrCoverModal = () => {
    return (
        <div>
            <ModalTemplate identificator="editProfilePicture">
                <EditProfilePicture />
            </ModalTemplate>

            <ModalTemplate identificator="editCoverTheme">
                <EditCoverTheme />
            </ModalTemplate>
        </div>
    )
}

const EditProfilePicture = () => {

    const [picRoute, setPicRoute] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0].name;
        if (file) {
            setPicRoute(file);
        }
    };

    const api_function = async () => {
        localStorage.setItem("userPictureRoute", picRoute);
    }

    const post_success_function = () => {
        location.reload();
        console.log("la api se llamó exitosa y épicamente");
    }

    const { onSubmit, register, isLoading } = useCustomForm(api_function, post_success_function, "")

    return (
        <div className="h-full w-full lg:w-1/2 mx-auto text-white flex items-center justify-center p-5">
            <form
                className="flex flex-col gap-5"
                onSubmit={onSubmit}>

                <ImgInput
                    name="pictureRoute"
                    register={register}
                    text={picRoute ? "Archivo seleccionado: " + picRoute : "Haz click para subir una nueva foto de perfil o puedes arrastar la foto y soltarla aquí"}
                    status={handleFileChange}
                />

                {picRoute && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <SubmitButton text="Actualizar foto de perfil" isLoading={isLoading} />
                        </motion.div>
                    </AnimatePresence>
                )}
            </form>
        </div>
    )
}

const EditCoverTheme = () => {

    const api_function = async (data: any) => {
        const theme = data.themeColor;

        localStorage.setItem("themeColor", theme);
    }

    const post_success_function = () => {
        location.reload();
        console.log("la api se llamó exitosa y épicamente");
    }

    const resetColor = () => {
        localStorage.setItem("themeColor", "#45156B");
        location.reload();
    }

    const { onSubmit, register, isLoading } = useCustomForm(api_function, post_success_function, "")

    return (
        <form
            onSubmit={onSubmit}
            className="h-full w-full lg:w-1/2 mx-auto text-white flex flex-col items-center justify-center p-4 gap-5">

            <ColorPickerInput register={register} name="themeColor" inputValue={userData.themeColor} />

            <p onClick={() => resetColor()} className="text-xl transition-all duration-300 border-2 border-overlay_1 hover:border-2 hover:border-custom_white rounded-xl p-2 my-2">Restablecer color de tema</p>
            <SubmitButton text="Guardar cambios" isLoading={isLoading} />
        </form>
    )
}