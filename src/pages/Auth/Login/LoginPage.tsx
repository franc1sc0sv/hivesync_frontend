import { Notifications } from "../../../components/Alerts/Notification";
import { HeaderForm } from "../../../components/forms/HeaderForm";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-overlay_1">
      <div className="flex flex-col justify-center items-center gap-10 w-[80%] max-w-lg">
        <HeaderForm />
        <LoginForm />
        <Notifications />
      </div>
    </div>
  );
};
