import { MessageProps } from "./types/Messages";

const temporaryRoute =
  "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

export const friends: MessageProps[] = [
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario1",
    messagePreview: "Hola, ¿cómo estás?",
    timeAgo: "Hace 2 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: false,
    username: "Usuario2",
    messagePreview: "¡Hola! ¿Qué tal?",
    timeAgo: "Hace 1 día",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario3",
    messagePreview: "¿Qué planes tienes para hoy?",
    timeAgo: "Hace 3 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: false,
    username: "Usuario4",
    messagePreview: "¡Buenos días! ¿Cómo va todo?",
    timeAgo: "Hace 5 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario5",
    messagePreview: "Hola amigo, ¿qué cuentas?",
    timeAgo: "Hace 1 semana",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario6",
    messagePreview: "¡Hola! ¿Qué hay de nuevo?",
    timeAgo: "Hace 4 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario7",
    messagePreview: "¿Has visto esa película nueva?",
    timeAgo: "Hace 1 día",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: false,
    username: "Usuario8",
    messagePreview: "Hola, ¿estás libre para hablar ahora?",
    timeAgo: "Hace 2 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: false,
    username: "Usuario9",
    messagePreview: "¿Cómo ha ido tu día?",
    timeAgo: "Hace 10 horas",
  },
  {
    pictureRoute: temporaryRoute,
    isActive: true,
    username: "Usuario10",
    messagePreview: "¡Hola! ¿Qué has estado haciendo?",
    timeAgo: "Hace 6 horas",
  },
];
