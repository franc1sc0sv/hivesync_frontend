import { MessageProps } from "./types/Messages";

const temporaryRoute =
  "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

export const friends: MessageProps[] = [
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario1",
    messagePreview: "Hola, ¿cómo estás?",
    timeAgo: "2 horas",
  },
];
