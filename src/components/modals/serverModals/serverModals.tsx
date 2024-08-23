import { MembersListModal } from "./members/membersListModal"
import { ServerInfoModal } from "./serverInfoModal"
import { AddServerMembersModal } from "./members/addServerMemberModal"
import { EventsModal } from "./events/eventsModal"
import { CreateCategory } from "./serversMenu/CreateCategory"
import { CreateChannel } from "./serversMenu/CreateChannel"
import { ServerSettingsModal } from "./serverSettings/serverSettingsModal"
import { LeaveServerDialogue } from "../../Alerts/dialog/serverDialogues/leaveServerDialogue"
import { LeaveServerModal } from "./serversMenu/leaveServer"

export const ServerModals: React.FC = () => {
    return (
        <>
            <ServerInfoModal />
            <MembersListModal />
            <AddServerMembersModal />
            <EventsModal />
            <CreateCategory />
            <CreateChannel />
            <ServerSettingsModal />
            <LeaveServerDialogue />
        </>
    )
}