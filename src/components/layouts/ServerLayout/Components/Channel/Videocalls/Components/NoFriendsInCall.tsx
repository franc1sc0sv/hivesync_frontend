import { PurpleButton } from "../../../../../../buttons/PurpleButton"

export const NoFriendsinCall=()=>{
    const awa = () =>{
        console.log("habla epicamente")
    }
    return (
        <div className="flex  flex-col items-center rounded-overlay bg-overlay_2 justify-evenly gap-5 p-4 w-fit">

            <h1 className="text-3xl  text-custom_white font-anaheim  text-center w-fit">
                No tienes compañia🦗
            </h1>
            <p className="text-xl text-center text-gray pl-3 pr-3 font-almarai max-w-[400px]">
              Traete a alguien contigo para charlar, organizarte o pasar el rato
            </p>
            <PurpleButton text="invita a Amigos" onAction={awa}/>
            
        </div>
    )
}
    