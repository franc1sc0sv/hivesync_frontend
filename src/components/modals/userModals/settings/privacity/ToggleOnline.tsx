import React, { useState } from "react";
import { ModalTemplate } from "../../../ModalTemplate";
import { useCustomForm } from "../../../../../hooks/useForm";
import { ToggleSwitch } from "../../../../forms/switch";
import { USER_STATUS_PROFILE } from "../../../../layouts/VideocallLayout/config";


export const ToggleOnline: React.FC = () => {
  return (
    <ModalTemplate identificator="toggleOnline">
      <div className="flex items-center justify-center h-full">
        <Form />
      </div>
    </ModalTemplate>
  );
};



const Form = () => {
  const [status, setStatus] = useState<string>(() => {
    // Obtén el estado inicial desde localStorage, con "desconectado" como valor por defecto
    const storedStatus = localStorage.getItem("localAppearAs");
    return storedStatus ? storedStatus : USER_STATUS_PROFILE.DISCONNECTED;
  });

  const api = () => console.log("API llamada");
  const success = () => console.log("Cambio de estado exitoso");

  const { register } = useCustomForm(api, success, "");

  const handleToggle = () => {
    const newStatus = status === USER_STATUS_PROFILE.CONNECTED ? USER_STATUS_PROFILE.DISCONNECTED : USER_STATUS_PROFILE.CONNECTED;
    setStatus(newStatus);
    // Guarda el nuevo estado en localStorage como "conectado" o "desconectado"
    localStorage.setItem("localAppearAs", newStatus);
    location.reload(); // Recargar la página para aplicar cambios
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <p className="text-2xl text-custom_white">Activa o desactiva tu estado en línea</p>
      <ToggleSwitch 
        name="appearAs" 
        register={register} 
        onClick={handleToggle} 
        isChecked={status === USER_STATUS_PROFILE.CONNECTED} // Chequear si el estado es "conectado"
      />
      <p className="text-2xl text-light_purple">
        {status === USER_STATUS_PROFILE.CONNECTED ? "Estás en línea" : "Estás desconectado"}
      </p>
    </div>
  );
};
