import { UserHeader } from "../../../components/layout/user/userHeader";
import { NavBar } from "../../../components/layout/user/navBar";
import { SearchBar } from "../../../components/forms/SearchBar";
import { HiUserAdd } from "react-icons/hi";


export const AddFriendsPage: React.FC = () => {

  return (
    <>
      <div className="md:hidden lg:hidden h-screen w-full bg-overlay_1 flex flex-col justify-between">
        
        <UserHeader title="Añadir amigos" />


        <div className="bg-overlay_2 h-1/3 mx-5 flex flex-col items-center justify-evenly rounded-lg"
        >
          <HiUserAdd className="text-6xl text-custom_white" />

          <h1 className="text-3xl text-custom_white">Buscar amigos</h1>

          <p className="text-xl text-center text-custom_white">¡Construye conexiones significativas!.</p>

        </div>

        {/* search bar  */}
        <SearchBar placeholder="Busca por nombre de usuario" />

        <NavBar />

      </div>
    </>
  );
};
