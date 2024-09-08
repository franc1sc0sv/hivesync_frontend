import { useState } from "react";

import { UserIcon } from "../../../../components/Icons/user";
import { ShieldIcon } from "../../../../components/Icons/shield";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
  toggleOptions: boolean;
}

interface SettingsProps {
  settings: MenuProps[]
}

const options: MenuProps[] = [
  {
    icon: <UserIcon size={30} color="white" />,
    name: "Cuenta",
    page: <AccountSettingsFakePage />,
    toggleOptions: false
  },
  {
    icon: <ShieldIcon size={30} color="white" />,
    name: "Privacidad",
    page: <PrivacySettingsFakePage />,
    toggleOptions: false
  },
  {
    icon: <MicrophoneIcon size={30} color="white" />,
    name: "Voz",
    page: <VoiceSettingsFakePage />,
    toggleOptions: false
  },
  {
    icon: <ColorPaletteIcon size={30} color="white" />,
    name: "Apariencia",
    page: <AppearanceSettingsFakePage />,
    toggleOptions: false
  },
]


export const MenuOptions: React.FC = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-3 overflow-y-auto">
      <SettingsTemplate settings={options} />
    </div>
  );
};

const SettingsTemplate: React.FC<SettingsProps> = ({ settings }) => {

  const [settingsState, setSettingsState] = useState(settings);

  const handleToggle = (index: number) => {
    setSettingsState((prevState) => {
      const newSettings = prevState.map((setting, i) => {
        if (i === index) {
          return { ...setting, toggleOptions: !setting.toggleOptions };
        }
        return setting;
      });
      return newSettings;
    });
  };

  return (
    <div className="h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 p-3 rounded-xl">
      {settingsState.map((option, index) => (
        <div
          onClick={() => handleToggle(index)}
          key={index}
          className={`relative flex flex-col items-center gap-3 p-5 bg-overlay_2 hover:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform border-4 border-overlay_2 hover:border-primary w-full flex-shrink-0`}
        >
          <div
            className="flex flex-row items-center justify-between w-full"
          >
            <div className="flex flex-row items-center justify-center gap-3">
              {option.icon}
              <p className="text-custom_white text-lg font-medium">
                {option.name}
              </p>
            </div>
            {option.toggleOptions ? (
              <IoIosArrowUp size={40} color="#fff" />
            ) : (
              <IoIosArrowDown size={40} color="#fff" />
            )}
          </div>

          {/* El contenido expandible */}
          <div
            className={`w-full transition-all ease-in-out overflow-hidden`}
            style={{
              transition: "0.3s ease-in-out",
              overflow: "hidden",
            }}
          >
            {option.toggleOptions && (
              <div className="w-full bg-gray-800 p-3 rounded-lg text-custom_white">
                <p>El contenido</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

  );
};

