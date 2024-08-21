import { ModalTemplate } from "../../../ModalTemplate";
import { useCustomForm } from "../../../../../hooks/useForm";
import { ToggleSwitch } from "../../../../forms/switch";
import React, { useState } from "react";

export const EditTransitionModal: React.FC = () => {
    return (
        <ModalTemplate identificator="editTransition">
            <div className="flex items-center justify-center h-full">
                <Form />
            </div>
        </ModalTemplate>
    );
}

const Form = () => {
    const [isChecked, setIsChecked] = useState<boolean>(() => {
        // Inicializar el estado del toggle desde localStorage, si existe
        const storedValue = localStorage.getItem("transitionState");
        return storedValue ? JSON.parse(storedValue) : false;
    });

    const toggleTransition = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        console.log(newCheckedState);
        localStorage.setItem("transitionState", JSON.stringify(newCheckedState));
        
        // Opcional: Recargar la página para aplicar cambios
        location.reload();
    }

    const api = () => console.log("hola, *llama a la api épicamente*");
    const success = () => console.log("success");
  
    const {register } = useCustomForm(api, success, "");
  

    return (
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <p className="text-2xl text-custom_white">Activa o desactiva la transición entre páginas</p>
            <ToggleSwitch 
                name="transition" 
                register={register} 
                onClick={toggleTransition} 
                isChecked={isChecked} // Pasar el estado inicial al switch
            />
            <p className="text-2xl text-light_purple">{isChecked ? "La transición está activa" : "La transición está desactivada"}</p>
        </div>
    );
}
