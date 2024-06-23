import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout"
import { RigthButton } from "./Components/RigthButton"

import { NotificationsPanel } from "./Components/NotificationsPanel"
import { notifications } from "./Components/notifications"

export const NotificationsPage = () => {
    return (
        <GeneralLayout title="Notificaciones" RightComponent={RigthButton}>
            <article className="flex flex-col w-full h-full gap-5 bg-gray-800 rounded-lg shadow-lg">
                <NotificationsPanel notifications={notifications} />
            </article>
        </GeneralLayout>
    )

}