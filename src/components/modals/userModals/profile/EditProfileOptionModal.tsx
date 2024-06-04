import { ModalTemplate } from "../../ModalTemplate";
import { AddStatusModal } from "./AddStatusModal";
import { EditProfileModal } from "./EditProfileModal";

export const EditProfileOptionModals: React.FC = () => {
  return (
    <div>
      <ModalTemplate identificator="añadirEstado">
        <div className="flex items-center justify-center h-full">
          <AddStatusModal />
        </div>
      </ModalTemplate>

      <ModalTemplate identificator="editarPerfil">
        <div className="flex items-center justify-center h-full">
          <EditProfileModal />
        </div>
      </ModalTemplate>
    </div>
  );
};
