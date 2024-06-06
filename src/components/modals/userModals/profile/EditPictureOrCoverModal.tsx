import { ModalTemplate } from "../../ModalTemplate";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { ColorPickerInput } from "../../../forms/Inputs/ColorPicker";
import { SubmitButton } from "../../../forms/Inputs/Button";

export const EditPictureOrCoverModal = () => {
    return (
        <div>
            <ModalTemplate identificator="editProfilePicture">
                <EditProfilePic />
            </ModalTemplate>

            <ModalTemplate identificator="editCoverTheme">
                <EditCoverTheme />
            </ModalTemplate>
        </div>
    )
}

const EditProfilePic = () => {
    return (
        <div className="h-full w-full text-white flex items-center justify-center p-5">
            <ImgInput
                text="Haz click para subir una nueva foto de perfil o puedes arrastar la foto y soltarla aquí"
            />
        </div>
    )
}

const EditCoverTheme = () => {
    return (
        <div className="h-full w-full text-white flex flex-col items-center justify-center p-4 gap-5">
            <ColorPickerInput />
            <SubmitButton text="Guardar cambios" isLoading={false} />
        </div>
    )
}