import { UserHeader } from "../../../components/layout/user/userHeader";
import { Link } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";
import { UserStatusIcon, IconProps } from "../../../components/layout/user/userStatusIcon";
import { NavBar } from "../../../components/layout/user/navBar";
import { InboxMessage } from "../../../components/layout/user/inboxMessage";

//testing image
const temporaryRoute = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

interface MessageProps extends IconProps {
  username: string;
  messagePreview: string;
  timeAgo: string;
}

const friends: MessageProps[] = [
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario1", messagePreview: "Hola, ¿cómo estás?", timeAgo: "Hace 2 horas" },
  { pictureRoute: temporaryRoute, isActive: false, username: "Usuario2", messagePreview: "¡Hola! ¿Qué tal?", timeAgo: "Hace 1 día" },
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario3", messagePreview: "¿Qué planes tienes para hoy?", timeAgo: "Hace 3 horas" },
  { pictureRoute: temporaryRoute, isActive: false, username: "Usuario4", messagePreview: "¡Buenos días! ¿Cómo va todo?", timeAgo: "Hace 5 horas" },
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario5", messagePreview: "Hola amigo, ¿qué cuentas?", timeAgo: "Hace 1 semana" },
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario6", messagePreview: "¡Hola! ¿Qué hay de nuevo?", timeAgo: "Hace 4 horas" },
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario7", messagePreview: "¿Has visto esa película nueva?", timeAgo: "Hace 1 día" },
  { pictureRoute: temporaryRoute, isActive: false, username: "Usuario8", messagePreview: "Hola, ¿estás libre para hablar ahora?", timeAgo: "Hace 2 horas" },
  { pictureRoute: temporaryRoute, isActive: false, username: "Usuario9", messagePreview: "¿Cómo ha ido tu día?", timeAgo: "Hace 10 horas" },
  { pictureRoute: temporaryRoute, isActive: true, username: "Usuario10", messagePreview: "¡Hola! ¿Qué has estado haciendo?", timeAgo: "Hace 6 horas" }
];




export const IndexUserPage = () => {

  const id = 1;

  return (
    <>
      <div className="h-screen w-full bg-overlay_1 flex flex-col">

        {/* header container */}
        <div className="w-full flex flex-row justify-between items-center">

          <div className="w-1/3 p-2">
            <UserHeader title="Mensajes" />
          </div>

          <div className="w-auto p-2">
            <Link to={"add-friends"} className="md:hidden lg:hidden sm:h-1/4 bg-overlay_1 flex flex-row items-center justify-end gap-2">
              <HiUserAdd className="text-custom_white text-3xl" />
              <h2 className="text-custom_white text-md">Añadir amigos</h2>
            </Link>
          </div>

        </div>

        {/* active friends container */}
        <div className="md:hidden lg:hidden p-5 mx-5 rounded-lg bg-overlay_2 flex flex-row items-center  overflow-x-auto">
          <div className="flex flex-shrink-0 gap-5">

            {friends.length === 0 ? (
              <h2 className="text-custom_white">No tienes amigos por el momento.</h2>
            ) : (
              <>
                {friends.filter(friend => friend.isActive).map((friend, index) => (
                  <Link to={`:${id}`} key={index}>
                    <UserStatusIcon pictureRoute={friend.pictureRoute} isActive={friend.isActive} />
                  </Link>
                ))}

                {friends.filter(friend => !friend.isActive).map((friend, index) => (
                  <Link to={`:${id}`} key={index}>
                    <UserStatusIcon pictureRoute={friend.pictureRoute} isActive={friend.isActive} />
                  </Link>
                ))}
              </>
            )}

          </div>

        </div>

        {/*inbox*/}

          <div className="md:hidden lg:hidden m-5 rounded-lg overflow-y-auto">
            {friends.map((friend, index) => (
              <Link to={`:${id}`} key={index}>
                <InboxMessage pictureRoute={friend.pictureRoute} isActive={friend.isActive} username={friend.username} messagePreview={friend.messagePreview} timeAgo={friend.timeAgo} />

              </Link>
            ))}
          </div>


        {/* Navigation bar */}
          <NavBar />

      </div>

    </>
  );
};


