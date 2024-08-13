import { RouteObject } from "react-router-dom";
import { AuthDetector } from "../../components/auth/AuthDetector";

import { DirectMessagesPage } from "../../pages/User/DirectMessages/DM";
import { ChatPage } from "../../pages/User/Chat/ChatPage";
import { ComunityPage } from "../../pages/User/Comunity/ComunityPage";
import { ComunityIndividualPage } from "../../pages/User/ComunityIndividual/ComunityIndividualPage";
import { ServerPage } from "../../pages/User/Servers/ServerPage";
import { ProfilePage } from "../../pages/User/Profile/Profile";
import { SettingsPage } from "../../pages/User/UserSettings/Settings";
import { NotificationsPage } from "../../pages/User/Notifications/NotificationsPage";

//no le hagan caso xd ay lo borro
import { TestingPage } from "../../pages/testing/TestingPage";

export const UserRoutes: RouteObject = {
  caseSensitive: true,
  path: "/app",
  element: <AuthDetector />,
  children: [
    { path: "@me", element: <DirectMessagesPage /> }, // Bandeja entrada DM
    { path: ":id", element: <ChatPage /> }, //Chats individuales
    {path: "test", element: <TestingPage/> },

    { path: "@notifications", element: <NotificationsPage /> }, //Notificaciones

    { path: "profile/:id", element: <ProfilePage /> },
    { path: "profile/:id/settings", element: <SettingsPage /> }, //ajustes del usuario

    { path: "comunity", element: <ComunityPage /> },
    { path: "comunity/:id", element: <ComunityIndividualPage /> },
    { path: ":id/:id", element: <ServerPage /> }, // Servers - /server_id/channel_id
  ],
};
