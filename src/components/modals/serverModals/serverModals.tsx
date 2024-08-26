import { ServerInfoModal } from "./serverInfoModal"

import { MembersListModal } from "./members/membersListModal"
import { AddServerMembersModal } from "./members/addServerMemberModal"

import { EventsModal } from "./events/eventsModal"

import { CreateCategory } from "./serversMenu/CreateCategory"
import { CreateChannel } from "./serversMenu/CreateChannel"

import { ServerSettingsModal } from "./serverSettings/serverSettingsModal"

import { LeaveServerDialogue } from "../../Alerts/dialog/serverDialogues/leaveServerDialogue"

import { ServerEditionModals } from "./serversMenu/editServer/ServerEditionModals"

export const ServerModals: React.FC = () => {
    return (
        <>
            <ServerInfoModal />
            {/* edit information, cover and picture */}
            <ServerEditionModals /> 
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