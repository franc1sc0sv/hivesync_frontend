import { ModalTemplate } from "../../ModalTemplate";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

import { useCustomForm } from "../../../../hooks/useForm";
import { ImgInput } from "../../../forms/Inputs/ImgInput";
import { ColorPickerInput } from "../../../forms/Inputs/ColorPicker";
import { SubmitButton } from "../../../forms/Inputs/Button";
import { useSession } from "../../../../store/user";

//mock

export const EditPictureOrCoverModal = () => {
  return (
    <div>
      <ModalTemplate identificator="editProfilePicture">
        <EditProfilePictureForm />
      </ModalTemplate>

      <ModalTemplate identificator="editCoverTheme">
        <EditCoverThemeForm />
      </ModalTemplate>
    </div>
  );
};

// const ModalHeader = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       <p className="text-2xl font-bold text-center font-amiko text-custom_white">
//         Sube tu foto de perfil
//       </p>
//       <p className="text-sm text-center font-almarai text-custom_white">
//         Dale identidad a tu perfil con una foto
//       </p>
//     </div>
//   );
// };

export const EditProfilePictureForm = () => {
  const [picRoute] = useState("");

  // const handleFileChange = (_: React.ChangeEvent<HTMLInputElement>) => {
  //   // const file = event.currentTargetS
  //   // if (file) {
  //   //   setPicRoute(file);
  //   // }
  // };

  const api_function = async () => {
    localStorage.setItem("userPictureRoute", picRoute);
  };

  const post_success_function = () => {
    location.reload();
    console.log("la api se llamó exitosa y épicamente");
  };

  const { onSubmit, register, isLoading } = useCustomForm(
    api_function,
    post_success_function,
    ""
  );

  return (
    <div className="flex items-center justify-center w-full h-full p-5 mx-auto text-white lg:w-1/2">
      <form className="flex flex-col w-full gap-5 lg:w-4/5" onSubmit={onSubmit}>
        <ImgInput
          name="pictureRoute"
          register={register}
          text={
            picRoute
              ? "Archivo seleccionado: " + picRoute
              : "Haz click para subir una foto"
          }
          status={() => {}}
        />

        {picRoute && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SubmitButton
                text="Actualizar foto de perfil"
                isLoading={isLoading}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </form>
    </div>
  );
};

export const EditCoverThemeForm = () => {
  const { user } = useSession();

  const api_function = async (data: any) => {
    const theme = data.themeColor;

    localStorage.setItem("themeColor", theme);
  };

  const post_success_function = () => {
    location.reload();
    console.log("la api se llamó exitosa y épicamente");
  };

  const resetColor = () => {
    localStorage.setItem("themeColor", "#45156B");
    location.reload();
  };

  const { onSubmit, register, isLoading } = useCustomForm(
    api_function,
    post_success_function,
    ""
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full h-full gap-5 p-4 mx-auto text-white lg:w-1/2"
    >
      <ColorPickerInput
        register={register}
        name="themeColor"
        inputValue={user?.backgroundUrl}
      />

      <p
        onClick={() => resetColor()}
        className="p-2 my-2 text-xl transition-all duration-300 border-2 border-overlay_1 hover:border-2 hover:border-custom_white rounded-xl"
      >
        Restablecer color de tema
      </p>
      <SubmitButton text="Guardar cambios" isLoading={isLoading} />
    </form>
  );
};
