import { Link } from "react-router-dom";
export const IndexPage = () => {
  return (
    <main className="flex flex-col w-full bg-overlay_1 min-h-screen">
      <div className=" flex flex-row p-6 justify-between items-center">
        <img className="flex h-8 p-1" src="../public/logo.png"></img>
        <div className="flex flex-row-reverse gap-3 m-1">
          <Link className="text-white box-border rounded-md text-1xl p-2 font-almarai bg-primary hover:bg-light_blue" to={"signup"}>Registro</Link>
          <Link className="text-white text-1xl p-2 font-almarai hover:bg-overlay_2 box-border rounded-md" to={"/login"}>Iniciar Sesion</Link>
        </div>
      </div>
        <div className="col-start-1 span-2 z-50">
          <div className="p-[60px] m-5 flex flex-col">
              <div className="text-white text-[70px] m-2">
                <p className="font-anaheim">Donde los Grupos</p>
                <p className="font-anaheim">Manejan Su</p>
                <p className="font-amiko">Eficacia</p>
              </div>
            <div className="text-white font-alamari w-[700px] text-[24px] ml-2 mb-2">
              <p className="mb-2">Usa Llamadas, canales de texto, FlashCards, Crea Grupos y explora Diferentes espacios en una interfaz intuitiva de forma gratuita.</p>
              <p className="mb-2">Consideramos las herramientas y recursos diseñados para optimizar la interacción entre equipos y mejorar la gestión de proyectos y aprendizaje.</p>
            </div>
            <div className="bg-primary w-16 h-3 box-border rounded-md mt-2 mb-4 ml-2"><button></button>
            </div>
            <div className="text-white box-border m-2 rounded-md bg-primary p-1.5 w-36 flex flex-row justify-between items-center ">
              <p className="font-anami text-sm p-1 ">Usar HiveSync</p>
              <img className="h-4" src="../public/flecha.png"></img>
            </div>
          </div>
        </div>
        <div className="absolute m-8 top-[100px] right-0 z-0">
          <div className="grid grid-cols-4 gap-1">
            <img className="col-start-2 w-[300px]" src="../public/moneda.png"></img>
            <img className="col-start-3 col-span-2 w-[500px]" src="../public/esferaN.png"></img>
            <img className="col-start-2 col-span-2 w-[500px]" src="../public/esfera.png"></img>
            <img className="col-start-4 w-[300px]" src="../public/cono.png"></img>
          </div>
        </div>
    </main> 
  );
};