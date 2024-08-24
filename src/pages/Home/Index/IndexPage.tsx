import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <main className="flex flex-col w-full bg-overlay_1 min-h-screen relative">
      {/* Contenedor Principal */}
      <div className="relative z-20 p-6">
        {/* Cabecera */}
        <div className="flex flex-row justify-between items-center mb-10">
          <img className="h-8 p-1" src="/logo.png" alt="Logo" />
          <div className="flex flex-row-reverse gap-3">
            <Link
              className="text-white rounded-sm text-xl p-2 font-almarai bg-primary"
              to={"signup"}
            >
              Empezar
            </Link>
            <Link
              className="text-white text-xl p-2 font-almarai hover:bg-overlay_2 rounded-sm"
              to={"/login"}
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>

        {/* Contenido Principal con Imágenes */}
        <div className="relative p-4 flex items-start">
          {/* Texto principal */}
          <div className="text-white text-4xl relative z-20">
            <p className="font-anaheim">Donde los Grupos Manejan Su</p>
            <p className="font-amiko font-bold">Eficacia</p>

            <p className="font-almarai text-white text-base mb-4">
              Usa Llamadas, canales de texto, FlashCards, Crea Grupos y explora
              Diferentes espacios en una interfaz intuitiva de forma gratuita
            </p>
            <p className="font-almarai text-white text-base mb-6">
              Consideramos las herramientas y recursos diseñados para optimizar
              la interacción entre equipos y mejorar la gestión de proyectos y
              aprendizaje.
            </p>

            {/* Barra y Botón */}
            <div className="bg-primary w-14 h-3 rounded-md mb-4"></div>
            <div className="text-white bg-primary rounded-sm p-2 w-40 flex justify-between items-center">
              <p className="font-anami text-sm">Usar HiveSync</p>
              <img className="h-4" src="/flecha.png" alt="Flecha" />
            </div>

            {/* Subtítulo y Texto */}
            <p className="font-amiko text-white text-xl mt-8 font-extrabold">
              Conéctate, Comunica, Colabora.
            </p>
            <p className="font-almarai text-white text-base mt-2">
              HiveSync ofrece comunicación integrada a través de chat de texto,
              voz y video en una plataforma unificada, con funciones de
              organización como canales y roles para una experiencia eficaz.
            </p>

            {/* Tres cuadros alineados bajo el texto */}
            <div className="flex justify-between mt-4 relative">
  {/* Lado Izquierdo: Tres cuadros */}
  <div className="flex flex-col">
    {/* Primer cuadro ocupa la izquierda */}
    <div className="flex">
      <div className="bg-[#2E2934] h-[150px] w-[200px] mr-1 rounded-md"></div>
      {/* Columna de dos cuadros pequeños a la derecha */}
      <div className="flex flex-col space-y-1">
        <div className="bg-[#2E2934] h-[75px] w-[118px] rounded-md"></div>
        <div className="bg-[#2E2934] h-[72px] w-[118px] rounded-md"></div>
      </div>
    </div>
  </div>

  {/* Imagen nudo.png posicionada entre el tercer cuadro y el espacio derecho */}
  <div className="absolute left-[50%] top-[100%] transform translate-x-[-25%] translate-y-[-50%] z-10">
    <img className="w-32 h-auto" src="/nudo.png" alt="Nudo" />
  </div>
</div>
          </div>

          {/* Imágenes organizadas con posición absoluta */}
          <div
            className="absolute right-0 top-0 grid grid-cols-2 gap-4 opacity-90"
            style={{ transform: "translateX(20px)" }}
          >
            <img className="w-32 h-auto" src="/moneda.png" alt="Moneda" />
            <img className="w-32 h-auto" src="/esferaN.png" alt="EsferaN" />
            <img className="w-32 h-auto" src="/esfera.png" alt="Esfera" />
            <img className="w-32 h-auto" src="/cono.png" alt="Cono" />
          </div>
        </div>

        {/* Texto y Cuadro "Tu aprendizaje al Lado de Todos" */}
        <div className="relative mt-12">
          <div className="bg-[#45156B] w-64 h-36 flex items-center justify-center">
            {/* Texto centrado dentro del cuadro morado pero desplazado hacia la derecha */}
            <div className="font-amiko text-white text-xl relative transform translate-x-[50%]">
              <p>Tu aprendizaje al</p>
              <p>Lado de Todos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
