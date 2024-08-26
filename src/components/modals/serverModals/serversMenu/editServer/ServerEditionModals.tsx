import { EditServerModal } from "./EditInformation"
import { EditCoverModal } from "./EditServerCover"
import { EditServerPicture } from "./EditServerPicture"

export const ServerEditionModals: React.FC = () => {
    return (
        <>
            <EditServerModal />
            <EditCoverModal />
            <EditServerPicture />
        </>
    )
}