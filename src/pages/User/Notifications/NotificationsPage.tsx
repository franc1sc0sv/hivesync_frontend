import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
// import { RightButton } from "./Components/RigthButton";

import { Notifications } from "../../../components/Alerts/Notification";

import { NotificationsPanel } from "./Components/NotificationsPanel";
import { NotificationProvider } from "./context/NotificationsContext";
import { AddFriendModal } from "../../../components/modals/userModals/friends/AddFriendModal";

export const NotificationsPage = () => {
  return (
    <GeneralLayout title="Notificaciones">
      <Notifications />
      <AddFriendModal />
      <NotificationProvider>
        <NotificationsPanel />
      </NotificationProvider>
    </GeneralLayout>
  );
};
