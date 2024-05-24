import { ModalTemplate } from "../../ModalTemplate"
import { AddStatusModal } from "./AddStatusModal"
import { EditProfileModal } from "./EditProfileModal"

export const EditProfileOptionModals: React.FC = () => {
    return (
        <div>
            <ModalTemplate identificator="añadirEstado">
                <div className="h-full flex justify-center items-center">
                    <AddStatusModal />
                </div>
            </ModalTemplate>

            <ModalTemplate identificator="editarPerfil">
                <div className="h-full flex justify-center items-center">
                    <EditProfileModal />
                </div>
            </ModalTemplate>
        </div>

    )
}