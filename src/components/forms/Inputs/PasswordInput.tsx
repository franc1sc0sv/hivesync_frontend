import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { InputsForms } from "./inputs";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const PasswordInput: React.FC<Props> = ({ register }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePassworwd = () => {
    setShowPassword((prevState) => !prevState);
  };

  const iconStyles =
    "absolute right-0 flex items-center pr-3 text-xl cursor-pointer top-1/2 text-custom_white ";

  return (
    <div className="relative w-full max-w-[320px]">
      <InputsForms
        register={register}
        name="password"
        title="Contraseña"
        placeholder="Digite su contraseña"
        type={showPassword ? "text" : "password"}
      />

      {!showPassword ? (
        <RiEyeCloseLine
          size={36}
          className={iconStyles}
          onClick={handlePassworwd}
        />
      ) : (
        <RiEyeLine size={36} className={iconStyles} onClick={handlePassworwd} />
      )}
    </div>
  );
};
