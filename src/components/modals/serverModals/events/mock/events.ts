interface EventsProps {
    name: string,
    description: string,
    eventDate: string
}

export const events: EventsProps[] = [
    {
        name: "Noche de Trivia",
        description: "Demuestra tu conocimiento en cultura geek y tecnología. ¡Premios para los ganadores!",
        eventDate: "24-09-24"
    },
    {
        name: "Taller de Configuración de Bots",
        description: "Aprende a configurar y personalizar los bots más útiles para tu servidor de Discord.",
        eventDate: "26-09-24"
    },
    {
        name: "Torneo de Among Us",
        description: "Únete al torneo y encuentra al impostor antes de que sea demasiado tarde.",
        eventDate: "30-09-24"
    },
    {
        name: "Sesión de Cine Comunitario",
        description: "Vente con tus palomitas para una noche de películas online y charlas en el chat de voz.",
        eventDate: "01-10-24"
    },
    {
        name: "Masterclass: Cómo Crecer tu Comunidad",
        description: "Consejos y estrategias para aumentar la interacción y atraer nuevos miembros.",
        eventDate: "05-10-24"
    },
    {
        name: "Concurso de Memes",
        description: "Crea los memes más divertidos y compite por el título de Meme Lord del servidor.",
        eventDate: "10-10-24"
    }
];
