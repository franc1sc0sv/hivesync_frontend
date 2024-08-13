import { ModalTemplate } from "../../ModalTemplate";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { ColorPickerInput } from "../../../forms/Inputs/ColorPicker";
import { SubmitButton } from "../../../forms/Inputs/Button";

import { useCustomForm } from "../../../../hooks/useForm";

const theme = localStorage.getItem('themeColor');
const verifyTheme = theme ? theme : "#45156B";

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
    return (
        <div className="h-full w-full text-white flex items-center justify-center p-5">
            <ImgInput
                text="Haz click para subir una nueva foto de perfil o puedes arrastar la foto y soltarla aquí"
            />
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

    const { onSubmit, register, isLoading } = useCustomForm(api_function, post_success_function, "")
    
    return (
        <form 
        onSubmit={onSubmit}
        className="h-full w-full lg:w-1/2 mx-auto text-white flex flex-col items-center justify-center p-4 gap-5">
            <ColorPickerInput register={register} name="themeColor" inputValue={verifyTheme} />
            <SubmitButton text="Guardar cambios" isLoading={isLoading} />
        </form>
    )
}