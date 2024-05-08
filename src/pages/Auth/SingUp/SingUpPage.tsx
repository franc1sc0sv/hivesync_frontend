import { HeaderForm } from "../../../components/forms/HeaderForm"
import { SingUpForm } from "./SingUpForm"

export const SingUpPage = () => {
  return (
    <div className="w-full h-screen bg-overlay_1 flex items-center flex-col justify-center">
      <HeaderForm />
      <SingUpForm />
    </div >
  )
}

