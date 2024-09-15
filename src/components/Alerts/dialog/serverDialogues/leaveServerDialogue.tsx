import { DialogueTemplate } from "../dialogueModalTemplate";
import { CustomizedButton } from "../../../buttons/customizedButton";
import { useModal } from "../../../../store/useModal";
import { SadFaceIcon } from "../../../Icons/sadFace";
import { useNotifications } from "../../../../store/useNotifications";

export const LeaveServerDialogue: React.FC = () => {
  return (
    <DialogueTemplate identificator="delete_server">
      <Dialogue />
    </DialogueTemplate>
  );
};

const Dialogue: React.FC = () => {
  const { setModalId } = useModal();
  const { setNotifications } = useNotifications();

  const accept = () => {
    setModalId("");
    setNotifications({
      message: "Has abandonado el servidor",
      severity: "info",
    });
    return;
  };

  const decline = () => {
    setModalId("");
  };
  return (
    <div className="flex flex-col w-full h-full gap-5 p-3">
      <div className="flex flex-col items-center justify-start w-full gap-3">
        <SadFaceIcon size={50} color="white" />
        <p className="text-2xl text-center text-custom_white">
          ¿Estás seguro de que quieres abandonar el servidor?
        </p>
      </div>

      <div className="flex flex-row justify-between w-full gap-5">
        <CustomizedButton
          text="Confirmar"
          color="#9333ea"
          displayIcon={false}
          onAction={accept}
        />
        <CustomizedButton
          text="Cancelar"
          color="#382C6C"
          displayIcon={false}
          onAction={decline}
        />
      </div>
    </div>
  );
};
