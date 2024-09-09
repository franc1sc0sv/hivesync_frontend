import { UserIcon } from "../../../components/Icons/user";
import { ShieldIcon } from "../../../components/Icons/shield";
import { MicrophoneIcon } from "../../../components/Icons/microphone";
import { ColorPaletteIcon } from "../../../components/Icons/colorPalette";

export interface MenuProps {
  icon: React.ReactNode;
  name: string;
  toggleOptions: boolean;
  options: {
    name: string,
    modal: string
  }[]
}

export interface SettingsProps {
  settings: MenuProps[]
}



export const options: MenuProps[] = [
  {
    icon: <UserIcon size={30} color="white" />,
    name: "Cuenta",
    toggleOptions: false,
    options: [
      {
        name: "Nombre de usuario",
        modal: "editUsername"
      },
      {
        name: "Tu nombre",
        modal: "editName"
      },
      {
        name: "Correo electrónico",
        modal: "editMail"
      },
      {
        name: "Contraseña",
        modal: "editPassword"
      },
    ]
  },
  {
    icon: <ShieldIcon size={30} color="white" />,
    name: "Privacidad",
    toggleOptions: false,
    options: [
      {
        name: "Estado en Linea",
        modal: "toggleOnline"
      }
    ]
  },
  {
    icon: <MicrophoneIcon size={30} color="white" />,
    name: "Voz",
    toggleOptions: false,
    options: [
      {
        name: "Micrófono",
        modal: "toggleMicro"
      }
    ]
  },
  {
    icon: <ColorPaletteIcon size={30} color="white" />,
    name: "Apariencia",
    toggleOptions: false,
    options: [
      {
        name: "Modificar color del tema de la portada",
        modal: "editCoverTheme"
      },
      {
        name: "Transición al navegar por HiveSync",
        modal: "editTransition"
      }
    ]
  },
]