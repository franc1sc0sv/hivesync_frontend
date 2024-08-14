import { ModalTemplate } from "../../ModalTemplate";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { ColorPickerInput } from "../../../forms/Inputs/ColorPicker";
import { SubmitButton } from "../../../forms/Inputs/Button";

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
  );
};

const ModalHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-2xl font-bold text-center font-amiko text-custom_white">
        Sube tu foto de perfil
      </p>
      <p className="text-sm text-center font-almarai text-custom_white">
        Dale identidad a tu perfil con una foto
      </p>
    </div>
  );
};

const EditProfilePicture = () => {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 text-white">
      <ModalHeader />
      <ImgInput text="Subir" />
    </div>
  );
};

const EditCoverTheme = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-4 mx-auto text-white lg:w-1/2">
      <ColorPickerInput />
      <SubmitButton text="Guardar cambios" isLoading={false} />
    </div>
  );
};
