import { GoBackTriangle } from "../../../components/buttons/goBackTriangle"
import { InputsForms } from "../../../components/forms/inputs"
import { PasswordInput } from "../../../components/forms/PasswordInput"
import { PurpleInput } from "../../../components/forms/PurpleInput"
import { Link } from "react-router-dom"
import { DateOfBirthInput } from "../../../components/forms/DateBirth"

export const SingUpPage = () => {
  return (<>
    <div className="w-full md:hidden lg:hidden h-screen bg-overlay_1 flex flex-col">
      <GoBackTriangle />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center text-custom_white font-style: font-almarai font-bold">Regístrate en HiveSync</h1>
        <div className="h-4 bg-primary w-14 rounded-lg mx-auto my-5"></div>
        <InputsForms title="Usuario" placeholder="Digite su usuario" type="text" />
        <InputsForms title="Email" placeholder="Digite su email" type="text" />
        <DateOfBirthInput/>
        <PasswordInput/>
        <PurpleInput text="Registrate" />
        <Link to="/login"><p className="text-custom_white">¿Ya tienes cuenta?  Inicia en HiveSync</p></Link>
      </div>
    </div>
  </>)
}