import { RouteObject } from "react-router-dom";
import { AuthDetector } from "../../components/auth/AuthDetector";

import { ChatPage } from "../../pages/User/Chat/ChatPage";
import { AddFriendsPage } from "../../pages/User/Chat/addFriends";
import { ComunityPage } from "../../pages/User/Comunity/ComunityPage";
import { IndexUserPage } from "../../pages/User/IndexUser/IndexUserPage";
import { ComunityIndividualPage } from "../../pages/User/ComunityIndividual/ComunityIndividualPage";
import { ServerPage } from "../../pages/User/Servers/ServerPage";
import { ProfilePage } from "../../pages/User/Profile/Profile";
import { SettingsPage } from "../../pages/User/UserSettings/Settings";
import { NotificationsPage } from "../../pages/User/Notifications/NotificationsPage";

export const UserRoutes: RouteObject = {
  caseSensitive: true,
  path: "/app",
  element: <AuthDetector />,
  children: [
    { path: "@me", index: true, element: <IndexUserPage /> }, // Mensajes directos,
    { path: "@notifications", element: <NotificationsPage /> }, //Chats individuales

    { path: "add-friends", element: <AddFriendsPage /> },

    { path: ":id", element: <ChatPage /> }, //Chats individuales

    { path: "profile/:id", element: <ProfilePage /> },
    { path: "profile/:id/settings", element: <SettingsPage /> }, //ajustes del usuario

    { path: "comunity", element: <ComunityPage /> },
    { path: "comunity/:id", element: <ComunityIndividualPage /> },
    { path: ":id/:id", element: <ServerPage /> }, // Servers - /server_id/channel_id
  ],
};
