import { InputsForms } from "../../../components/forms/inputs";
import { PasswordInput } from "../../../components/forms/PasswordInput";
import { PurpleInput } from "../../../components/forms/PurpleInput";
import { Link } from "react-router-dom";


export const LoginPage = () => {
  return (<>
    <div className="w-full h-screen bg-overlay_1 grid place-items-center">

      <div className="flex flex-col gap-3 w-full">
        <Link to={"/"} className="text-5xl text-center text-custom_white font-style: font-almarai font-bold">HiveSync</Link>
        <div className="h-4 bg-primary w-20  rounded-lg mx-auto my-5"></div>
        <LoginForm />
      </div>
    </div>
  </>);
};

const LoginForm = () => {
  return <form className="flex flex-col justify-center items-center gap-10">
    <div className="text-custom_white flex flex-col gap-5 items-center w-full">
      <InputsForms title="Email" placeholder="Digite su email" type="text" />
      <PasswordInput />
      <PurpleInput text="Entra en HyveSync" />
    </div>

    <div className="text-custom_white flex flex-col gap-2 items-center w-full">

      <Link to="/signup" className="text-custom_white">¿No tienes cuenta?  Crea una en HiveSync</Link>
      <Link to={"/"} className="text-custom_white">Olvidé mi contraseña</Link>
    </div>

  </form>
}