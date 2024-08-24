import { ComponentsAnimator } from "../../../../components/animation/componentsAnimator";

import { BellIcon } from "../../../../components/Icons/bell";
import { formatTimeDifference } from "../../../../helpers/date";
import { useNotificationsContext } from "../context/useNotifications";
import { NotificationProps } from "../types/NotificationProps";

export const NotificationsPanel = () => {
  return (
    <section className="flex flex-col w-full h-full gap-5 overflow-y-auto bg-gray-800 rounded-lg shadow-lg">
      <CategoriesHeader />
      <NotificationsBox />
    </section>
  );
};

const NotificationsBox = () => {
  const { category, notifications } = useNotificationsContext();

  const filteres_notifications =
    category === "all"
      ? [...notifications]
      : notifications.filter((noti) => noti.category === category);
  return filteres_notifications.length === 0 ? (
    <NoNotifications />
  ) : (
    <NotificationsContainer filtered_notifications={filteres_notifications} />
  );
};

const NotificationsContainer = ({
  filtered_notifications,
}: {
  filtered_notifications: NotificationProps[];
}) => {
  return (
    <article className="flex flex-col w-full h-full gap-5 overflow-y-auto">
      {filtered_notifications.map((noti, i) => (
        <NotificationItem key={i} notification={noti} i={i} />
      ))}
    </article>
  );
};

const NotificationItem = ({
  notification,
  i,
}: {
  notification: NotificationProps;
  i: number;
}) => {
  return (
    <ComponentsAnimator key={i}>
      <div className="flex items-center w-full p-4 border-b-0">
        <img
          src={notification.data.profile_url}
          alt="User"
          className="object-cover w-12 h-12 mr-3 rounded-full"
        />
        <div className="flex flex-col w-full">
          <p className="text-white">{notification.message}</p>
          <span className="self-end text-sm text-white">
            {formatTimeDifference(notification.createdAt)}
          </span>
        </div>
      </div>
    </ComponentsAnimator>
  );
};

const CategoriesHeader = () => {
  const {
    category: selectedCategory,
    handleCategoryClick,
    categories,
  } = useNotificationsContext();
  return (
    <div className="flex gap-4 overflow-x-auto">
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => handleCategoryClick(category.id)}
          className={`py-2 px-4 rounded-full capitalize ${
            selectedCategory === category.id
              ? "bg-purple-600 text-white"
              : "bg-transparent text-white transition-all duration-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
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
