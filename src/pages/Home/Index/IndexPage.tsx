import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <main className="flex flex-col w-full bg-overlay_1 min-h-screen">
      <div className="z-50">
        <div className=" flex flex-row p-6 justify-between items-center">
            <img className="flex h-8 p-1" src="../public/logo.png"></img>
            <div className="flex flex-row-reverse gap-3 m-1">
              <Link className="text-white box-border rounded-sm text-1xl p-2 font-almarai bg-primary" to={"signup"}>Registro</Link>
              <Link className="text-white text-1xl p-2 font-almarai hover:bg-overlay_2 box-border rounded-sm" to={"/login"}>Iniciar Sesion</Link>
            </div>
          </div>
          <div className="p-4">
            <div className="text-white text-4xl m-2">
              <p className="font-anaheim">Donde los Grupos Manejan Su</p>
              <p className="font-amiko">Eficacia</p>
            </div>
            <div className="text-white font-alamari text-sm m-2">
              <p className="z-30">Usa Llamadas, canales de texto, FlashCards, Crea Grupos y explora Diferentes espacios en una interfaz intuitiva de forma gratuita.</p>
            </div>
            <div className="bg-primary w-16 h-4 box-border rounded-md m-2"><button></button></div>
            <div className="text-white box-border m-2 rounded-sm bg-primary p-1.5 w-36 flex flex-row justify-between items-center ">
              <p className="font-anami text-sm m-2 ">Usar HiveSync</p>
              <img className="h-4" src="../public/flecha.png"></img>
            </div>
        </div>
      </div>
      <div className="p-1 z-0">
        <img className="w-40 absolute top-40 right-0" src="../public/moneda.png"></img>
        <img className="w-60 absolute top-60 left-40" src="../public/esfera.png"></img>
        <img className="w-40 absolute bottom-20 left-80 p-4" src="../public/cono.png"></img>
      </div>
    </main> 
  );
};

