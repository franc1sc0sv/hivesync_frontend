import { RouteObject } from "react-router-dom";
import { AuthDetector } from "../../components/auth/AuthDetector";

import { ChatPage } from "../../pages/User/Chat/ChatPage";
import { ComunityPage } from "../../pages/User/Comunity/ComunityPage";
import { IndexUserPage } from "../../pages/User/IndexUser/IndexUserPage";
import { ComunityIndividualPage } from "../../pages/User/ComunityIndividual/ComunityIndividualPage";
import { ServerPage } from "../../pages/User/Servers/ServerPage";

export const UserRoutes: RouteObject = {
  caseSensitive: true,
  path: "/app",
  element: <AuthDetector />,
  children: [
    { index: true, element: <IndexUserPage /> }, // Mensajes directos
    { path: ":id", element: <ChatPage /> }, //Chats individuales

    { path: "comunity", element: <ComunityPage /> },
    { path: "comunity/:id", element: <ComunityIndividualPage /> },

    { path: ":id/:id", element: <ServerPage /> }, // Servers - /server_id/channel_id
  ],
};
