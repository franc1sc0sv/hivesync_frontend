import { HiUserAdd } from "react-icons/hi"

export const CardFriends = () => {
    return <div className="flex flex-col items-center rounded-lg bg-overlay_2 h-1/3 justify-evenly">
        <HiUserAdd className="text-6xl text-custom_white" />

        <h1 className="text-3xl text-custom_white">Buscar amigos</h1>

        <p className="text-xl text-center text-custom_white">
            ¡Construye conexiones significativas!.
        </p>
    </div>
}