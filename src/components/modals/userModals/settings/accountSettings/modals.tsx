import { EditUsernameModal } from "./editUsername"
import { EditNameModal } from "./editName"
import { EditMailModal } from "./editMail"
import { EditPasswordModal } from "./editPassword"

export const AccountSettingsModals = () => {
    return (
        <>
            <EditUsernameModal />
            <EditNameModal />
            <EditMailModal />
            <EditPasswordModal />
        </>
    )
}