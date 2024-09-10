import { createContext, useState } from "react";

interface Option {
  option: React.ReactNode;
}

interface ContextProps {
  component: React.ReactNode;
  setComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  renderOption: (option: Option) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const OptionsContext = createContext<ContextProps | null>(null);

export const OptionsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [component, setComponent] = useState<React.ReactNode>(<></>);

  const renderOption = ({ option }: Option) => setComponent(option);

  return (
    <OptionsContext.Provider value={{ component, setComponent, renderOption }}>
      {children}
    </OptionsContext.Provider>
  );
};
