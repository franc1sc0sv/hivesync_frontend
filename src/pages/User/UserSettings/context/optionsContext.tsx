import { createContext, useState } from "react";

interface ContextProps {
    component: React.ReactNode;
    setComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

interface ProviderProps {
    children: React.ReactNode;
}


const optionsContext = createContext<ContextProps | null>(null);

export const OptionProvider = ({ children }: ProviderProps) => {
    const [component, setComponent] = useState<React.ReactNode>(<></>);

    return (
        <optionsContext.Provider value={{ component, setComponent }}>
            {children}
        </optionsContext.Provider>
    );
};

