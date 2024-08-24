import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { RightButton } from "./Components/RigthButton";

import { Notifications } from "../../../components/Alerts/Notification";

import { NotificationsPanel } from "./Components/NotificationsPanel";
import { NotificationProvider } from "./context/NotificationsContext";

export const NotificationsPage = () => {
  return (
    <GeneralLayout title="Notificaciones" RightComponent={RightButton}>
      <Notifications />
      <NotificationProvider>
        <NotificationsPanel />
      </NotificationProvider>
    </GeneralLayout>
  );
};
