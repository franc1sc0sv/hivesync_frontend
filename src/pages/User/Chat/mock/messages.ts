export interface MessageProps {
    isUserSender: boolean,
    content: string
}

const storedConversation = localStorage.getItem("conversation");
export const conversation: MessageProps[] = storedConversation ? JSON.parse(storedConversation) : [];

export const messagesData: MessageProps[] = [
    {
        isUserSender: true,
        content: "Hola, ¿cómo estás?"
    },
    {
        isUserSender: false,
        content: "¡Hola! Estoy bien, ¿y tú?"
    },
    {
        isUserSender: true,
        content: "Estoy muy bien, gracias. ¿Qué planes tienes para hoy?"
    },
    {
        isUserSender: false,
        content: "Nada en especial, tal vez salir a caminar más tarde."
    },
    {
        isUserSender: true,
        content: "Suena bien, ¡disfruta tu paseo!"
    },
    {
        isUserSender: false,
        content: "Gracias, lo haré. ¿Y tú? ¿Qué harás hoy?"
    },
    {
        isUserSender: true,
        content: "Tengo algunos proyectos que terminar, pero nada demasiado pesado."
    },
    {
        isUserSender: false,
        content: "¡Genial! Espero que todo te salga bien."
    },
    {
        isUserSender: true,
        content: "Gracias, aprecio tu apoyo."
    },
    {
        isUserSender: false,
        content: "¡Siempre! Hablamos más tarde."
    }
];






// localStorage.setItem("conversation", JSON.stringify([
//     {
//         isUserSender: true,
//         content: "Hola, ¿cómo estás?"
//     },
//     {
//         isUserSender: false,
//         content: "¡Hola! Estoy bien, ¿y tú?"
//     },
//     {
//         isUserSender: true,
//         content: "Estoy muy bien, gracias. ¿Qué planes tienes para hoy?"
//     },
//     {
//         isUserSender: false,
//         content: "Nada en especial, tal vez salir a caminar más tarde."
//     },
//     {
//         isUserSender: true,
//         content: "Suena bien, ¡disfruta tu paseo!"
//     },
//     {
//         isUserSender: false,
//         content: "Gracias, lo haré. ¿Y tú? ¿Qué harás hoy?"
//     },
//     {
//         isUserSender: true,
//         content: "Tengo algunos proyectos que terminar, pero nada demasiado pesado."
//     },
//     {
//         isUserSender: false,
//         content: "¡Genial! Espero que todo te salga bien."
//     },
//     {
//         isUserSender: true,
//         content: "Gracias, aprecio tu apoyo."
//     },
//     {
//         isUserSender: false,
//         content: "¡Siempre! Hablamos más tarde."
//     }
// ]));
