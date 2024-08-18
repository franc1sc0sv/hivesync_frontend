export const notificationsList = JSON.parse(localStorage.getItem("notifications") || "[]");

const notifications = [
  {
    message: "María ha enviado una solicitud de amistad",
    timeAgo: "10m",
    pictureRoute: "https://static.theclinic.cl/media/2013/06/tulio-trivi%C3%B1o.jpg",
    category: "Solicitudes",
  },
  {
    message: "Tienes una nueva invitación para unirte al servidor 'Gaming Central'",
    timeAgo: "30m",
    pictureRoute: "https://qph.cf2.quoracdn.net/main-qimg-e4e1cb37ac436944fad91174ed3aaa59-lq",
    category: "Invitaciones",
  },
  {
    message: "Juan ha comentado en tu publicación en #proyectos",
    timeAgo: "1h",
    pictureRoute: "https://i.ytimg.com/vi/-mtdoOVsdz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDG2Hj05w1OA43UOxn3ws4gcGf1w",
    category: "Mensajes",
  },
  {
    message: "Luisa ha aceptado tu solicitud de amistad",
    timeAgo: "2h",
    pictureRoute: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/fairfax/pollo-campero1_c01ce42b-5056-a36a-060dc377f14f061a.jpg",
    category: "Solicitudes",
  },
  {
    message: "Tienes una nueva mención en #recursos: @tú en el servidor 'Tech Community'",
    timeAgo: "4h",
    pictureRoute: "https://i.pinimg.com/736x/9e/c5/fd/9ec5fda89a576c4bb15f4241b8e25ea4.jpg",
    category: "Mensajes",
  },
  {
    message: "El servidor 'Música y Más' te ha enviado una invitación para ser moderador",
    timeAgo: "1d",
    pictureRoute: "https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-rombosman.png?fit=640%2C640&ssl=1",
    category: "Invitaciones",
  },
  {
    message: "Carlos ha reaccionado con ❤️ a tu mensaje en #general",
    timeAgo: "2d",
    pictureRoute: "https://img.vavel.com/c700_475_3800763-77305188-2560-1440-1698005483328.jpg",
    category: "Mensajes",
  },
  {
    message: "Pedro ha enviado una solicitud de amistad",
    timeAgo: "3d",
    pictureRoute: "https://www.rockandpop.cl/wp-content/uploads/2017/04/Juan-Carlos-Bodoque.jpg",
    category: "Solicitudes",
  },
  {
    message: "Nuevo evento en el servidor 'Developers United': Taller de React este fin de semana",
    timeAgo: "4d",
    pictureRoute: "https://ca-times.brightspotcdn.com/dims4/default/1790c8d/2147483647/strip/true/crop/3677x2451+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff3%2F19%2Ff6728872293ad44d9e1273826f94%2F3ed037030d6d40f296bb518cb93c2a1e",
    category: "Invitaciones",
  },
  {
    message: "Carla ha reaccionado con 👍 a tu mensaje en #off-topic",
    timeAgo: "5d",
    pictureRoute: "https://c8.alamy.com/compfr/hchd5m/monsters-inc-randall-boggs-2001-hchd5m.jpg",
    category: "Mensajes",
  },
  {
    message: "Nueva mención en el servidor 'Gamers Hub': @tú en #eventos",
    timeAgo: "1w",
    pictureRoute: "https://i.blogs.es/c3747a/steve-jobs-presentacion/375_375.webp",
    category: "Mensajes",
  },
  {
    message: "Esteban ha enviado una solicitud de amistad",
    timeAgo: "1w",
    pictureRoute: "https://prod-resize.tiendainglesa.com.uy/images/medium/P379145-2.jpg?20220520113142,Galleta-OREO-354-gr-en-Tienda-Inglesa",
    category: "Solicitudes",
  },
  {
    message: "Invitación al servidor 'Cine Club': Maratón de películas este fin de semana",
    timeAgo: "1w",
    pictureRoute: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWLQqB3-aCjLcfjHz3UAVWA0jRE1id1rB4Q&s",
    category: "Invitaciones",
  },
  {
    message: "Martín ha comentado en tu publicación en #ideas",
    timeAgo: "2w",
    pictureRoute: "https://variety.com/wp-content/uploads/2022/08/Garfield-image-8K.jpeg?w=681&h=383&crop=1&resize=681%2C383",
    category: "Mensajes",
  }
];


localStorage.setItem("notifications", JSON.stringify(notifications));



