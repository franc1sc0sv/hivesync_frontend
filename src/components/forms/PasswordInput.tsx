import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import { useRef } from "react";




export const PasswordInput: React.FC = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const passwordVisibility = () => {
    setShowPassword(prevState => !prevState);
    if (inputRef.current) {
      const passwordInput = inputRef.current;
      passwordInput.type = showPassword ? "password" : "text";
    }

  };

  return (
    <div className="flex flex-col gap-4 w-3/5">
      <h3 className="text-lg text-custom_white font-almarai font-bold p-2">Contraseña</h3>
      <div className="relative mx-auto w-full max-w-md">
        <input
          ref={inputRef}
          type="password"
          className="bg-overlay_2 w-full p-3 rounded-xl text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary transition duration-300"
          placeholder="Digite su contraseña"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button type="submit">
            {!showPassword ? <RiEyeCloseLine className="text-xl text-custom_white " onClick={passwordVisibility} /> : <RiEyeLine className="text-xl text-custom_white " onClick={passwordVisibility} />}
          </button>
        </div>
      </div>
    </div>
  )
}