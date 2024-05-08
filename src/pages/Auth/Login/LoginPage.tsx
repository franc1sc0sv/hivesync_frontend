import { HeaderForm } from "../../../components/forms/HeaderForm";
import { LoginForm } from "./LoginForm";


export const LoginPage = () => {
  return (<>
    <div className="w-full h-screen bg-overlay_1 flex items-center flex-col justify-center">
      <HeaderForm />
      <LoginForm />
    </div>
  </>);
};
