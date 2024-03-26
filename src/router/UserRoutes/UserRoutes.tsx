import { RouteObject } from "react-router-dom";
import { AuthDetector } from "../../components/auth/AuthDetector";

export const UserRoutes: RouteObject = {
  caseSensitive: true,
  path: "/app",
  element: <AuthDetector />,
  children: [
    { path: "@me", element: "" }, // Mensajes directos
    { path: ":id", element: "" }, //Chats individuales

    { path: "comunity", element: "" },
    { path: "comunity/:id", element: "" },

    { path: "comunity/:id", element: "" },

    { path: ":id/:id", element: "" }, // Servers - /server_id/channel_id
  ],
};
