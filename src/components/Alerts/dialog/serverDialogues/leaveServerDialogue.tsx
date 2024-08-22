import { DialogueTemplate } from "../dialogueModalTemplate";
import { CustomizedButton } from "../../../buttons/customizedButton"; 7
import { useModal } from "../../../../store/useModal";
import { SadFaceIcon } from "../../../Icons/sadFace";
import { useNotifications } from "../../../../store/useNotifications";

export const LeaveServerDialogue: React.FC = () => {
    return (
        <DialogueTemplate identificator="leaveServer">
            <Dialogue />
        </DialogueTemplate>
    )
}

const Dialogue: React.FC = () => {

    const { setModalId } = useModal();
    const {setNotifications} = useNotifications();

    const accept = () => {
        setModalId("");
        setNotifications({
            message: "Has abandonado el servidor",
            severity: "info"
        })
        return
    }

    const decline = () => {
        setModalId("");
    }
    return (
        <div className="w-full h-full flex flex-col gap-5 p-3">
            <div className="w-full flex flex-col justify-start items-center gap-3">
                <SadFaceIcon size={50} color="white" />
                <p className="text-2xl text-custom_white text-center">¿Estás seguro de que quieres abandonar el servidor?</p>
            </div>

            <div className="w-full flex flex-row justify-between gap-5">
                <CustomizedButton text="Confirmar" color="#9333ea" displayIcon={false} onAction={accept} />
                <CustomizedButton text="Cancelar" color="#382C6C" displayIcon={false} onAction={decline} />
            </div>
        </div>
    )
}