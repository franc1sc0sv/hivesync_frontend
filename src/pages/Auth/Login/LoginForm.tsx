import { Link } from "react-router-dom";
import { InputsForms } from "../../../components/forms/Inputs/inputs";
import { PasswordInput } from "../../../components/forms/Inputs/PasswordInput";
import { SubmitButton } from "../../../components/forms/Inputs/Button";
import { useCustomForm } from "../../../hooks/useForm";
import { api_login } from "../../../api/auth";
import { useSession } from "../../../store/user";

export const LoginForm = () => {
  return (
    <>
      <Form />
      <FormFooter />
    </>
  );
};

const FormFooter = () => {
  return (
    <div className="flex flex-col items-center w-full gap-2 text-custom_white font-almarai hover:text-primary">
      <Link to="/signup" className="text-custom_white">
        No tienes cuenta? Crear cuenta
      </Link>
      <Link to={"/"} className="text-custom_white">
        Olvidé mi contraseña
      </Link>
    </div>
  );
};

const Form = () => {
  const { login } = useSession();
  const success = (data: Usuario) => {
    console.log(data);
    login(data);
  };
  const { onSubmit, register, isLoading } = useCustomForm(
    api_login,
    success,
    "/app/@me"
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full gap-5 text-custom_white"
    >
      <InputsForms
        register={register}
        //se necesita enviar si o si email, aún no acepta usuario por el momento la api
        name="email"
        title="Email o Usuario"
        placeholder="Digite su email o nombre de usuario"
        type="mail"
      />
      <PasswordInput register={register} />
      <SubmitButton isLoading={isLoading} text="Entra a Hivesync" />
    </form>
  );
};
