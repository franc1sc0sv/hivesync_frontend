import { RightTriangleIcon } from "../../../Icons/rightTriangle";

import { useModal } from "../../../../store/useModal";

import { MenuProps } from "./userAccountFakePage";
import { PrivacityModals } from "../../../modals/userModals/settings/privacity/PrivacityModals";

const PrivacityOptions: MenuProps[] = [
  {
    name: "Estado en Linea",
    modal: "toggleOnline",
  },
];

export const PrivacySettingsFakePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-5 p-3 overflow-y-auto sm:w-4/5 lg:w-3/5">
      {/* Privacity Options*/}
      <Options />
      <PrivacityModals />
    </div>
  );
};

const Options: React.FC = () => {
  const { setModalId } = useModal();

  return (
    <div className="flex flex-col gap-5 p-3 bg-overlay_2 rounded-xl">
      {PrivacityOptions.map((option, index) => (
        <button
          onClick={() => setModalId(option.modal)}
          className="flex flex-row items-center justify-between gap-3 text-lg transition-all duration-200 text-custom_white hover:text-light_purple"
          key={index}
        >
          {option.name}
          <RightTriangleIcon size={20} color="white" />
        </button>
      ))}
    </div>
  );
};
