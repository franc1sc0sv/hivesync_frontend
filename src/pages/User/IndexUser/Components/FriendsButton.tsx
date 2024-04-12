import { HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

export const FriendsButton = () => {
  return (
    <div className="w-auto p-2">
      <Link
        to={"add-friends"}
        className="flex flex-row items-center justify-end gap-2 md:hidden lg:hidden sm:h-1/4 bg-overlay_1"
      >
        <HiUserAdd className="text-3xl text-custom_white" />
        <h2 className="text-custom_white text-md">Añadir amigos</h2>
      </Link>
    </div>
  );
};
