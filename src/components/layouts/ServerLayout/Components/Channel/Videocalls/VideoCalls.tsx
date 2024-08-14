import { NoFriendsinCall } from "./NoFriendsInCall";
import { UserCard } from "./UserCard";
export const CallInterface = () => {
  return (
    <div className="flex flex-col h-screen w-screen text-white p-4 bg-overlay_1 min-h-fit overflow-hidden">
 
      <div className="flex flex-col md:flex-row h-full w-full justify-center items-center flex-grow mt-4 space-x-4">
        {/* Imagen del Usuario */}
        
        <NoFriendsinCall/>
      </div>

 
    </div>
  );
}

{/* Sección de Encuentra Amigos */}
{/* <NoFriendsinCall />  */}