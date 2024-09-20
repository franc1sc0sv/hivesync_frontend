import { UserIcon } from "../../../components/Icons/user";
import { ColorPaletteIcon } from "../../../components/Icons/colorPalette";

//account settings
import { EditUsernameForm } from "../../../components/modals/userModals/settings/accountSettings/editUsername";
import { EditNameForm } from "../../../components/modals/userModals/settings/accountSettings/editName";

import { ChangeAvatar } from "../../../components/modals/userModals/settings/accountSettings/changeAvatar/changeAvatar";
import { AboutMeForm } from "../../../components/modals/userModals/settings/accountSettings/aboutMe";

//appearance settings
import { ToggleTransitionForm } from "../../../components/modals/userModals/settings/appearance/transition";

import { EditCoverThemeForm } from "../../../components/modals/userModals/profile/EditPictureOrCoverModal";

export interface MenuProps {
  icon: React.ReactNode;
  name: string;
  toggleOptions: boolean;
  options: {
    name: string;
    modal: string;
    optionComponent: React.ReactNode;
  }[];
}

export interface SettingsProps {
  settings: MenuProps[];
}

export const options: MenuProps[] = [
  {
    icon: <UserIcon size={30} color="white" />,
    name: "Cuenta",
    toggleOptions: false,
    options: [
      {
        name: "Nombre de usuario",
        modal: "editUsername",
        optionComponent: <EditUsernameForm />,
      },
      {
        name: "Tu nombre",
        modal: "editName",
        optionComponent: <EditNameForm />,
      },
      {
        name: "Sobre mí",
        modal: "aboutMe",
        optionComponent: <AboutMeForm />,
      },
      {
        name: "Foto de perfil",
        modal: "changeAvatar",
        optionComponent: <ChangeAvatar />,
      },
    ],
  },
  {
    icon: <ColorPaletteIcon size={30} color="white" />,
    name: "Apariencia",
    toggleOptions: false,
    options: [
      {
        name: "Modificar color del tema de la portada",
        modal: "editCoverTheme",
        optionComponent: <EditCoverThemeForm />,
      },
      {
        name: "Transición al navegar por HiveSync",
        modal: "editTransition",
        optionComponent: <ToggleTransitionForm />,
      },
    ],
  },
  //{
  //   icon: <ShieldIcon size={30} color="white" />,
  //   name: "Privacidad",
  //   toggleOptions: false,
  //   options: [
  //     {
  //       name: "Estado en Linea",
  //       modal: "toggleOnline",
  //       optionComponent: <OnlineStatusForm />
  //     }
  //   ]
  // },
  // {
  //   icon: <MicrophoneIcon size={30} color="white" />,
  //   name: "Voz",
  //   toggleOptions: false,
  //   options: [
  //     {
  //       name: "Micrófono",
  //       modal: "toggleMicro",
  //       optionComponent: <MicrophoneStatusForm />
  //     }
  //   ]
  // },
];
