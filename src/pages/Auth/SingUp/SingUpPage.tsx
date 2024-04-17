import { InputsForms } from "../../../components/forms/inputs"
import { PasswordInput } from "../../../components/forms/PasswordInput"
import { PurpleInput } from "../../../components/forms/PurpleInput"
import { Link } from "react-router-dom"
import { DateOfBirthInput } from "../../../components/forms/DateBirth"

export const SingUpPage = () => {
  return (
    < div className="w-full h-screen bg-overlay_1 grid place-items-center" >
      <div className="flex flex-col gap-3 w-full">
        <Link to={"/"} className="text-5xl text-center text-custom_white font-style: font-almarai font-bold">HiveSync</Link>
        <div className="h-4 bg-primary w-20  rounded-lg mx-auto my-5" />
        <RegisterForm />
      </div>
    </div >
  )
}

const RegisterForm = () => {
  return <form className="flex flex-col justify-center items-center gap-5">
    <div className="flex flex-col gap-3 w-full items-center">
      <InputsForms title="Usuario" placeholder="Usuario" type="text" />
      <InputsForms title="Email" placeholder="Email" type="text" />
      <DateOfBirthInput />
      <PasswordInput />
    </div>

    <PurpleInput text="Registrate" />

    <Link to="/login"><p className="text-custom_white">¿Ya tienes cuenta?  Inicia en HiveSync</p></Link>
  </form>
}