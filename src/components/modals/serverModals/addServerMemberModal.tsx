import { SearchBar } from "../../forms/Inputs/SearchBar"
import { ModalTemplate } from "../ModalTemplate"
import { HiUserAdd } from "react-icons/hi"

export const AddServerMembersModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addServerMembers">
            <AddMembers />
        </ModalTemplate>
    )
}

const AddMembers: React.FC = () => {
    return (
        <section className="flex flex-col gap-10 my-10 w-full h-full">
            <AddMembersCard />
            <SearchBar placeholder="Busca por nombre de usuario" />
        </section>
    )
}

const AddMembersCard = () => {
    return (
        <div className="flex flex-col items-center rounded-lg bg-overlay_2 h-1/3 justify-evenly">
            <HiUserAdd className="text-6xl text-custom_white" />

            <h1 className="text-3xl text-custom_white">Agregar miembros al servidor</h1>

            <p className="text-xl text-center text-custom_white">
                ¡Construye conexiones significativas!.
            </p>
        </div>
    )
}