import { useEffect, useState } from "react";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationProps } from "./Notification";

import { ComponentsAnimator } from "../../../../components/animation/componentsAnimator";

import { BellIcon } from "../../../../components/Icons/bell";

interface NotificationsListProps {
  notifications: NotificationProps[];
}

export const NotificationsPanel = ({
  notifications = [],
}: {
  notifications: NotificationProps[];
}) => {
  const [notifications_data, setNotifications] =
    useState<NotificationProps[]>();

  useEffect(() => {
    const formatted_notifications = notifications.sort((a, b) =>
      b.timeAgo.localeCompare(a.timeAgo)
    );
    setNotifications(formatted_notifications);
  }, [notifications]);

  return (
    <div className="flex flex-col w-full h-full gap-3">
      {notifications.length === 0 ? (
        <NoNotifications />
      ) : (
        <NotificationsList
          notifications={notifications_data as NotificationProps[]}
        />
      )}
    </div>
  );
};

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  const categories = ["Todo", "Solicitudes", "Invitaciones", "Mensajes"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="flex flex-col w-full gap-5">
      <div className="flex gap-4 mt-8 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-transparent text-white transition-all duration-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {notifications?.map((notification, index) =>
        selectedCategory == "Todo" ? (
          <ComponentsAnimator>
            <NotificationIcon
              key={index}
              pictureRoute={notification.pictureRoute}
              message={notification.message}
              timeAgo={notification.timeAgo}
            />
          </ComponentsAnimator>
        ) : (
          selectedCategory == notification.category && (
            <ComponentsAnimator>
              <NotificationIcon
                key={index}
                pictureRoute={notification.pictureRoute}
                message={notification.message}
                timeAgo={notification.timeAgo}
              />
            </ComponentsAnimator>
          )
        )
      )}
    </section>
  );
};

const NoNotifications = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 sm:flex-row">
      <BellIcon size={60} color="white" />
      <h2 className="text-2xl text-center text-custom_white">
        No tienes notificaciones por el momento.
      </h2>
    </div>
  );
};
