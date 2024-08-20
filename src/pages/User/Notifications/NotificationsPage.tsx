import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout"
import { RightButton } from "./Components/RigthButton"

import { Notifications } from "../../../components/Alerts/Notification"

import { NotificationsPanel } from "./Components/NotificationsPanel"
import { notificationsList } from "./Components/notifications"

export const NotificationsPage = () => {
    return (
        <GeneralLayout title="Notificaciones" RightComponent={RightButton}>
            <Notifications />
            <article className="flex flex-col w-full h-full gap-5 bg-gray-800 rounded-lg shadow-lg overflow-y-auto">
                <NotificationsPanel notifications={notificationsList} />
            </article>
        </GeneralLayout>
    )

}