import { Notifications } from "../../../components/Alerts/Notification";
import { HeaderForm } from "../../../components/forms/HeaderForm";
import { SingUpForm } from "./SingUpForm";

export const SingUpPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full py-5 bg-overlay_1">
      <div className="flex flex-col justify-center items-center gap-10 lg:gap-3 w-[80%] max-w-lg">
        <HeaderForm />
        <SingUpForm />
        <Notifications />
      </div>
    </div>
  );
};
