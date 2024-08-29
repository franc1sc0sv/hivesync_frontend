export const ReadyToJoin =()=>{
    return (
        <section className="flex flex-col items-center justify-center h-full w-fit bg-gray-900 text-white">
        <article className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          </div>
          <h2 className="text-xl font-semibold">General</h2>
          <p>¡Todavía no ha llegado nadie!</p>
          <p className="text-sm text-gray-400 text-center w-3/4">Cuando lo tengas todo listo para hablar, entra sin más.</p>
        </article>
        <div className="bg-gray-900 rounded-full flex flex-center justify-between">
          <article className="flex items-center justify-center w-full mt-4 space-x-1">
            <div className="bg-gray-700 rounded-full flex items-center justify-center w-12 h-12">A</div>
            <div className="bg-green-500 rounded-xl flex items-center justify-center px-4 py-2 text-white ">
              <p>Unirme al canal de voz</p>
            </div>
            <div className="bg-gray-700 rounded-full flex items-center justify-center w-12 h-12">B</div>
          </article>
        </div>
      </section>
      
    )
  }
  
  