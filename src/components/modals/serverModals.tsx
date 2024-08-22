import { MembersListModal } from "./serverModals/members/membersListModal"
import { ServerInfoModal } from "./serverModals/serverInfoModal"
import { AddServerMembersModal } from "./serverModals/members/addServerMemberModal"
import { EventsModal } from "./serverModals/events/eventsModal"
import { CreateCategory } from "./serverModals/serversMenu/CreateCategory"
import { CreateChannel } from "./serverModals/serversMenu/CreateChannel"
import { ServerSettingsModal } from "./serverModals/serverSettings/serverSettingsModal"

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
        </>
    )
}