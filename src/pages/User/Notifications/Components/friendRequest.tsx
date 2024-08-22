import { CustomizedButton } from "../../../../components/buttons/customizedButton";
import { useNotifications } from "../../../../store/useNotifications";
import { useModal } from "../../../../store/useModal";

interface NotificationIconProps {
    username: string,
    pictureRoute: string;
    message: string;
}

export const FriendRequestNotification: React.FC<NotificationIconProps> = ({ username, pictureRoute, message })=> {


    const {setModalId} = useModal();
    const {setNotifications} = useNotifications();

    const acceptRequest = () => {
        console.log("aceptada");
        setNotifications({
            severity: "success",
            message: "Solicitud de amistad aceptada"
        })
        return
    }

    const declineRequest = () => {
        console.log("rechazada");
        setNotifications({
            severity: "error",
            message: "Solicitud de amistad rechazada"
        })
        return
    }

    return (
        <div className="w-full flex justify-between items-center p-2">

            <div 
            onClick={() => setModalId("")}
            className="flex flex-row items-center w-3/5">
                <img src={pictureRoute} alt="User" className="w-12 h-12 rounded-full object-cover mr-3" />
                <p className="text-white">{message}</p>
            </div>

            <div className="flex flex-col lg:flex-row w-2/5 sm:w-1/3 md:w-1/3 lg:w-1/5 gap-5">
                <CustomizedButton text="Aceptar" color="#9333ea" displayIcon={false} onAction={acceptRequest} />
                <CustomizedButton text="Rechazar" color="#382C6C" displayIcon={false} onAction={declineRequest} />
            </div>
        </div>
    )
}


