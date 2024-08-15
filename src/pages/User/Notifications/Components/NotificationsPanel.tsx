import { useEffect, useState } from "react";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationProps } from "./Notification";

import { BellIcon } from "../../../../components/Icons/bell";

export const NotificationsPanel = ({ notifications = [] }: { notifications: NotificationProps[] }) => {
    const [notifications_data, setNotifications] = useState<NotificationProps[]>()

    useEffect(() => {
        const formatted_notifications = notifications.sort((a, b) => b.timeAgo.localeCompare(a.timeAgo))
        setNotifications(formatted_notifications)
    }, [notifications])

    return (
        <div className="flex flex-col w-full h-full gap-3">
            {notifications.length === 0 ? <NoNotifications /> : <NotificationsList notifications={notifications_data as NotificationProps[]} />}
        </div >
    );
};

const NotificationsList = ({ notifications = [] }: { notifications: NotificationProps[] }) => {
    return notifications.map((notification, index) => (
        <NotificationIcon
            key={index}
            pictureRoute={notification.pictureRoute}
            message={notification.message}
            timeAgo={notification.timeAgo}
        />
    ))
}

const NoNotifications = () => {
    return (
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-5">
            <BellIcon size={60} color="white" />
            <h2 className="text-custom_white text-2xl text-center">
                No tienes notificaciones por el momento.
            </h2>
        </div>
    )
}