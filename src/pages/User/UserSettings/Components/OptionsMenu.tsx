import { UserIcon } from "../../../../components/Icons/user";
import { ShieldIcon } from "../../../../components/Icons/shield";

import { MicrophoneIcon } from "../../../../components/Icons/microphone";
import { ColorPaletteIcon } from "../../../../components/Icons/colorPalette";

import useFakePages from "../../../../store/useFakePage";
import { AccountSettingsFakePage } from "../../../../components/fakePages/user/settingsFakePages/userAccountFakePage";
import { PrivacySettingsFakePage } from "../../../../components/fakePages/user/settingsFakePages/privacyFakePage";

import { VoiceSettingsFakePage } from "../../../../components/fakePages/user/settingsFakePages/voiceFakePage";
import { AppearanceSettingsFakePage } from "../../../../components/fakePages/user/settingsFakePages/AppearanceFakePage";

interface MenuProps {
  icon: React.ReactNode;
  name: string;
  page: React.ReactNode;
}

const accountOptions: MenuProps[] = [
  {
    icon: <UserIcon size={30} color="white" />,
    name: "Cuenta",
    page: <AccountSettingsFakePage />,
  },
  {
    icon: <ShieldIcon size={30} color="white" />,
    name: "Privacidad",
    page: <PrivacySettingsFakePage />,
  },
  // {
  //   icon: <ClipIcon size={30} color="white" />,
  //   name: "Conexiones",
  //   page: <ConnectionsSettingsFakePage />
  // },
];

const appOptions: MenuProps[] = [
  {
    icon: <MicrophoneIcon size={30} color="white" />,
    name: "Voz",
    page: <VoiceSettingsFakePage />,
  },
  {
    icon: <ColorPaletteIcon size={30} color="white" />,
    name: "Apariencia",
    page: <AppearanceSettingsFakePage />,
  },
  // { icon: <HiOutlineLightBulb />, optionName: "Voz", optionLink: "" },
];

export const MenuOptions: React.FC = () => {
  return (
    <div className="w-full lg:w-4/5 mx-auto flex flex-col gap-5 h-[80vh] overflow-y-auto">
      {/* <form
        className="p-1"
        onSubmit={onSubmit}>

        <SearchBar
          name="setting"
          register={register}
          placeholder="Buscar una opción de ajuste" />
      </form> */}

      {/* account options */}
      <div>
        <h1 className="my-2 text-2xl text-custom_white">Mi cuenta</h1>
        <AccountSettings />
      </div>

      {/* style and connections */}
      <div>
        <h1 className="my-2 text-2xl text-custom_white rounded-xl">
          Ajustes avanzados
        </h1>
        <AppSettings />
      </div>
    </div>
  );
};

const AccountSettings: React.FC = () => {
  const { addFakePage } = useFakePages();

  return (
    <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
      {accountOptions.map((option, index) => (
        <button
          onClick={() =>
            addFakePage({ title: option.name, children: option.page })
          }
          className="flex flex-row items-center gap-3"
          key={index}
        >
          <div>
            <div className="p-2 rounded-xl">{option.icon}</div>
          </div>
          <p className="text-custom_white">{option.name}</p>
        </button>
      ))}
    </div>
  );
};

const AppSettings: React.FC = () => {
  const { addFakePage } = useFakePages();

  return (
    <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
      {appOptions.map((option, index) => (
        <button
          onClick={() =>
            addFakePage({ title: option.name, children: option.page })
          }
          className="flex flex-row items-center gap-3"
          key={index}
        >
          <div>
            <div className="p-2 rounded-xl">{option.icon}</div>
          </div>
          <p className="text-custom_white">{option.name}</p>
        </button>
      ))}
    </div>
  );
};
