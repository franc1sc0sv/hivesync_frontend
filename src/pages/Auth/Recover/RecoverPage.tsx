import React, { useState } from "react";
import { useCustomForm } from "../../../hooks/useForm";
import { api_login } from "../../../api/auth";
import { useSession } from "../../../store/user";
import { RiEyeCloseLine, RiEyeLine, RiArrowRightSLine } from "react-icons/ri";

export const RecoverPage: React.FC = () => {
  return (
    <div className="h-screen bg-overlay_1 flex items-center justify-center px-4">
      <Form />
    </div>
  );
};

const Form = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { login } = useSession();
  const success = (data: Usuario) => {
    console.log(data);
    login(data);
  };
  const { onSubmit } = useCustomForm(api_login, success, "/app/@me");

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const iconStyles =
    "absolute right-3 top-1/2 text-xl cursor-pointer text-white transform -translate-y-1/2";

  return (
    <div className="w-full max-w-md mx-4 sm:mx-8 lg:max-w-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Restablecer contraseña
        </h1>
        <div className="bg-purple-500 h-1 w-16 mx-auto rounded-full"></div>
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="relative">
          <label className="text-white text-sm mb-1 block">Nueva Contraseña</label>
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Su contraseña"
            className="w-full p-4 text-white bg-[#2B2433] border-none rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {showNewPassword ? (
            <RiEyeLine size={24} className={iconStyles} onClick={toggleNewPasswordVisibility} />
          ) : (
            <RiEyeCloseLine size={24} className={iconStyles} onClick={toggleNewPasswordVisibility} />
          )}
        </div>
        <div className="relative">
          <label className="text-white text-sm mb-1 block">Confirmar Contraseña</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Su contraseña"
            className="w-full p-4 text-white bg-[#2B2433] border-none rounded-md focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showConfirmPassword ? (
            <RiEyeLine size={24} className={iconStyles} onClick={toggleConfirmPasswordVisibility} />
          ) : (
            <RiEyeCloseLine size={24} className={iconStyles} onClick={toggleConfirmPasswordVisibility} />
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full py-4 text-white bg-[#661AE6] rounded-md hover:bg-[#580BB5] transition"
        >
          Entra en HiveSync
          <RiArrowRightSLine size={24} className="ml-2" />
        </button>
      </form>
    </div>
  );
};
