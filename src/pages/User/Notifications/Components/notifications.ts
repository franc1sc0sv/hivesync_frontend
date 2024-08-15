export const notificationsList = JSON.parse(localStorage.getItem("notifications") || "[]");

const notifications = [
  {
    message: "Alex ha enviado una solicitud de amistad",
    timeAgo: "1h",
    pictureRoute: "https://www.rockandpop.cl/wp-content/uploads/2017/04/Juan-Carlos-Bodoque.jpg",
  },
  {
    message: "Nueva actualización en el servidor 'Gaming Central': Evento de torneo este fin de semana",
    timeAgo: "3h",
    pictureRoute: "https://ca-times.brightspotcdn.com/dims4/default/1790c8d/2147483647/strip/true/crop/3677x2451+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff3%2F19%2Ff6728872293ad44d9e1273826f94%2F3ed037030d6d40f296bb518cb93c2a1e",
  },
  {
    message: "Tu rol en el servidor 'Dev Hub' ha sido actualizado a 'Colaborador'",
    timeAgo: "5h",
    pictureRoute: "https://i.ytimg.com/vi/-mtdoOVsdz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDG2Hj05w1OA43UOxn3ws4gcGf1w",
  },
  {
    message: "Sofía ha aceptado tu solicitud de amistad",
    timeAgo: "1d",
    pictureRoute: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/fairfax/pollo-campero1_c01ce42b-5056-a36a-060dc377f14f061a.jpg",
  },
  {
    message: "Nueva mención en el servidor 'Tech Talk': @tú en #general",
    timeAgo: "2d",
    pictureRoute: "https://i.pinimg.com/736x/9e/c5/fd/9ec5fda89a576c4bb15f4241b8e25ea4.jpg",
  },
  {
    message: "Carlos ha reaccionado con 👍 a tu mensaje en #off-topic",
    timeAgo: "4d",
    pictureRoute: "https://c8.alamy.com/compfr/hchd5m/monsters-inc-randall-boggs-2001-hchd5m.jpg",
  },
  {
    message: "El servidor 'Música y Más' te ha ascendido a 'Moderador'",
    timeAgo: "1w",
    pictureRoute: "https://img.vavel.com/c700_475_3800763-77305188-2560-1440-1698005483328.jpg",
  }
];

localStorage.setItem("notifications", JSON.stringify(notifications));



