import { ModalTemplate } from "../../ModalTemplate"
import { AddStatusModal } from "./AddStatusModal"

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
                    <h1 className="text-custom_white text-5xl">Editar Perfil</h1>
                </div>
            </ModalTemplate>
        </div>

    )
}