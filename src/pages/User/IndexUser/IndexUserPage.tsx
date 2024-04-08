import { UserHeader } from "../../../components/layout/user/userHeader";
import { Link } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";
import { UserStatusIcon, IconProps } from "../../../components/layout/user/userStatusIcon";

//testing image
const temporaryRoute = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

const friends: IconProps[] = [
  { pictureRoute: temporaryRoute, isActive: true },
  { pictureRoute: temporaryRoute, isActive: false },
  { pictureRoute: temporaryRoute, isActive: true },
  { pictureRoute: temporaryRoute, isActive: false },
  { pictureRoute: temporaryRoute, isActive: true },
  { pictureRoute: temporaryRoute, isActive: true },
  { pictureRoute: temporaryRoute, isActive: true },
  { pictureRoute: temporaryRoute, isActive: false },
  { pictureRoute: temporaryRoute, isActive: false },
  { pictureRoute: temporaryRoute, isActive: true }
];



export const IndexUserPage = () => {
  return (
    <>
      <div className="h-screen w-full bg-overlay_1">

        {/* header container */}
        <div className="w-full flex flex-row justify-between items-center">

          <div className="w-1/3 p-2">
            <UserHeader titulo="Mensajes" />
          </div>

          <div className="w-auto p-2">
            <Link to={"add-friends"} className="md:hidden lg:hidden sm:h-1/4 bg-overlay_1 flex flex-row items-center justify-end gap-2">
              <HiUserAdd className="text-custom_white text-3xl" />
              <h2 className="text-custom_white text-md">Añadir amigos</h2>
            </Link>
          </div>

        </div>

        {/* active friends container */}
        <div className="md:hidden lg:hidden p-4 mx-5 rounded-lg bg-overlay_2 flex flex-row items-center gap-5 overflow-x-auto">
          <div className="flex flex-shrink-0">

            {friends.length === 0 ? (
              <h2 className="text-custom_white">No tienes amigos por el momento.</h2>
            ) : (
              <>
                {friends.filter(friend => friend.isActive).map((friend, index) => (
                  <UserStatusIcon key={index} pictureRoute={friend.pictureRoute} isActive={friend.isActive} />
                ))}

                {friends.filter(friend => !friend.isActive).map((friend, index) => (
                  <UserStatusIcon key={index} pictureRoute={friend.pictureRoute} isActive={friend.isActive} />
                ))}
              </>
            )}

          </div>

        </div>

      </div>

    </>
  );
};
