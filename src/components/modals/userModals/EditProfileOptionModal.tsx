import { ModalTemplate } from "../ModalTemplate"

export const EditProfileOptionModals: React.FC = () => {
    return (
        <div>
            <ModalTemplate identificator="añadirEstado">
                <div className="h-full flex justify-center items-center">
                    <h1 className="text-custom_white text-5xl">Añadir estado</h1>
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