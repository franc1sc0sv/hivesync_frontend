import { GoBackTriangle } from "../../../components/buttons/goBackTriangle";
import { InputsForms } from "../../../components/forms/inputs";

export const LoginPage = () => {
  return (<>
    <div className=" w-full md:hidden lg:hidden h-screen bg-overlay_1 flex flex-col">
      <GoBackTriangle/>
      <div className="m-5 ">
        <h1 className="text-5xl text-center text-custom_white font-style: font-almarai font-bold">Inicia Sesión  en HiveSync</h1>
        <div className="h-4 bg-primary w-14 rounded-lg mx-auto my-5"></div>
        <div className="flex flex-col justify-center items-center">
            <InputsForms title="Email" placeholder="Digite su email" type="text"/>
        </div>
      </div>
    </div>
  </>);
};
