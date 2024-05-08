import { Link } from "react-router-dom";
import { InputsForms } from "../../../components/forms/Inputs/inputs";
import { PasswordInput } from "../../../components/forms/Inputs/PasswordInput";
import { SubmitButton } from "../../../components/forms/Inputs/Button";

export const LoginForm = () => {
    return <section className="flex flex-col justify-center items-center gap-10 w-[80%] max-w-lg">
        <Form />
        <FormFooter />
    </section>
}

const FormFooter = () => {
    return <div className="text-custom_white flex flex-col gap-2 items-center w-full font-almarai hover:text-primary">
        <Link to="/signup" className="text-custom_white">No tienes cuenta? Crear cuenta</Link>
        <Link to={"/"} className="text-custom_white">Olvidé mi contraseña</Link>
    </div>

}

const Form = () => {
    return <form className="text-custom_white flex flex-col gap-5 w-full">
        <InputsForms title="Email" placeholder="Digite su email" type="text" />
        <PasswordInput />
        <SubmitButton text="Entra a Hivesync" />
    </form>
}