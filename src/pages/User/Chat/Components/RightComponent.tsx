import { HiUserAdd } from "react-icons/hi"

export const CardFriends = () => {


    return <div className="w-full flex flex-col items-center rounded-lg justify-evenly">

        <div className="flex flex-row gap-2 items-center justify-center">
            <HiUserAdd className="text-6xl text-custom_white" />
            <p className="text-xl text-center text-custom_white font-almarai">
                ¿A quién quieres añadir como amigo?
            </p>
        </div>
    </div>
}