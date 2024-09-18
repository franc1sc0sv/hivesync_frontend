export function addMessageToGroupedMessages({
  messages,
  newMessage,
}: {
  messages: GroupedMessagesTypeArray;
  newMessage: Message;
}): GroupedMessagesTypeArray {
  const updatedMessages = [...messages];

  const findGroupIndex = (id_user: string, sendAt: string): number => {
    return updatedMessages.findIndex((group) => {
      if (group.id_user === id_user) {
        const previousDate = new Date(group.sendAt);
        const currentDate = new Date(sendAt);
        const timeDifference =
          (currentDate.getTime() - previousDate.getTime()) / 60000;
        return timeDifference <= 1;
      }
      return false;
    });
  };

  const userMap: Record<string, UserInfo> = {};
  updatedMessages.forEach((group) => {
    if (!userMap[group.id_user]) {
      userMap[group.id_user] = group.user;
    }
  });

  const groupIndex = findGroupIndex(newMessage.id_sender, newMessage.sendAt);

  if (groupIndex !== -1) {
    const group = updatedMessages[groupIndex];

    // Validar si el ID del mensaje ya existe en el grupo
    const messageExists = group.messages.some(
      (message) => message.id === newMessage.id
    );

    if (!messageExists) {
      group.messages.push({
        id: newMessage.id,
        message: newMessage.message,
      });
    }
  } else {
    // Crear un nuevo grupo si no existe un grupo adecuado
    const newGroup: GroupedMessagesType = {
      id_user: newMessage.id_sender,
      sendAt: newMessage.sendAt,
      messages: [
        {
          id: newMessage.id,
          message: newMessage.message,
        },
      ],
      user: userMap[newMessage.id_sender] || {
        name: "",
        username: "",
        about: "",
        profileUrl: "",
        backgroundUrl: "",
        id_user: newMessage.id_sender,
        createdAt: "",
      },
    };
    updatedMessages.push(newGroup);
  }

  // Ordenar los grupos por la fecha de envío
  updatedMessages.sort(
    (a, b) => new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime()
  );

  return updatedMessages;
}
