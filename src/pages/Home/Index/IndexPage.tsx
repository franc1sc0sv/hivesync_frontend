import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <main className="flex flex-col gap-2 w-full h-screen bg-overlay_1">
      <Link className="text-white text-2xl font-almarai" to={"signup"}>Registro</Link>
      <Link className="text-white text-2xl font-almarai" to={"/login"}>Iniciar Sesion</Link>
    </main>
  );
};