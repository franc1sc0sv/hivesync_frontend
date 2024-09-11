import { useState, useEffect } from "react";
import { useModal } from "../../../../store/useModal";

import { options } from "../optionsList";
import { SettingsProps } from "../optionsList";
import { useContext } from "react";
import { OptionsContext } from "../context/optionsContext";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export const MenuOptions: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-between overflow-hidden">
      <div className="w-full lg:w-1/3 overflow-y-auto">
        <SettingsTemplate settings={options} />
      </div>

      <div className="max-h-fit hidden lg:block w-3/5 ">
        <OptionSelected />
      </div>
    </div>
  );
};


const SettingsTemplate: React.FC<SettingsProps> = ({ settings }) => {

  const { setModalId } = useModal();

  const [settingsState, setSettingsState] = useState(settings);


  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const context = useContext(OptionsContext);
  const { setComponent } = context;

  //verificar resolución
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
    <div className="w-full flex flex-col gap-3 md:gap-8">
      {settingsState.map((option, index) => (
        <div
          key={index}
          className={`w-full relative flex flex-col gap-3 p-5 bg-overlay_2 hover:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform border-4 border-overlay_2 hover:border-primary flex-shrink-0`}
        >
          {/* card header */}
          <div
            onClick={() => handleToggle(index)}
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

          {/* Cntenido expandible */}
          <div
            className={`w-full transition-all ease-in-out overflow-hidden`}
            style={{
              maxHeight: option.toggleOptions ? "500px" : "0",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            <div className="w-full flex flex-col justify-start bg-gray-800 rounded-lg text-custom_white gap-5 p-3">
              {option.options.map((opt, index) => (
                <button
                  onClick={() => {
                    if (!isLargeScreen) {
                      setModalId(opt.modal);
                    } else {
                      setComponent(opt.optionComponent);
                    }
                  }}
                  key={index}
                  className="w-full text-start hover:bg-primary p-3 transition-all duration-200 rounded-xl">
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OptionSelected: React.FC = () => {

  const context = useContext(OptionsContext);
  const { component } = context;

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      {component}
    </div>
  )
}



