import { InputsForms } from "../../../components/forms/Inputs/inputs"
import { PasswordInput } from "../../../components/forms/Inputs/PasswordInput"
import { SubmitButton } from "../../../components/forms/Inputs/Button"
import { Link } from "react-router-dom"

export const SingUpForm = () => {
    return <section className="flex flex-col justify-center items-center gap-10 w-[80%] max-w-lg">
        <Form />
        <FormFooter />
    </section>


}

const Form = () => {
    return <form className="text-custom_white flex flex-col gap-5 w-full">
        <InputsForms title="Usuario" placeholder="Usuario" type="text" />
        <InputsForms title="Email" placeholder="Email" type="text" />
        <PasswordInput />
        <SubmitButton text="Entra a Hivesync" />
    </form>
}


const FormFooter = () => {
    return <div className="text-custom_white flex flex-col gap-2 items-center w-full font-almarai hover:text-primary">
        <Link to="/login" className="text-custom_white">¿Ya tienes cuenta?  Inicia en HiveSync</Link>
        <Link to={"/"} className="text-custom_white">Olvidé mi contraseña</Link>
    </div>

}