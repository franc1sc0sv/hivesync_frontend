import { ModalTemplate } from "../../ModalTemplate"

import { UserAddIcon } from "../../../Icons/userAdd"

import { SearchBar } from "../../../forms/Inputs/SearchBar"
import { useCustomForm } from "../../../../hooks/useForm"

export const AddServerMembersModal: React.FC = () => {
    return (
        <ModalTemplate identificator="addServerMembers">
            <AddMembers />
        </ModalTemplate>
    )
}

const AddMembers: React.FC = () => {

    const api = () => console.log("hola, *llama a la api épicamente*");
    const success = () => console.log("success");

    const { onSubmit, register } = useCustomForm(api, success, "");

    return (
        <section className="flex flex-col gap-10 my-10 w-full h-full">
            <AddMembersCard />
            <form onSubmit={onSubmit}>
                <SearchBar
                    name="user"
                    register={register}
                    placeholder="Busca por nombre de usuario" />
            </form>

        </section>
    )
}

const AddMembersCard = () => {
    return (
        <div className="flex flex-col items-center rounded-lg bg-overlay_2 h-1/3 justify-evenly">
            <UserAddIcon size={60} color="white" />

            <h1 className="text-3xl text-custom_white">Agregar miembros al servidor</h1>

            <p className="text-xl text-center text-custom_white">
                ¡Construye conexiones significativas!.
            </p>
        </div>
    )
}