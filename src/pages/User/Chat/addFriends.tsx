import { SearchBar } from "../../../components/forms/SearchBar";
import { HiUserAdd } from "react-icons/hi";
import { Header } from "../../../components/layouts/GeneralLayout/Components/UserHeader";
import { NavBar } from "../../../components/layouts/GeneralLayout/Components/NavBar";

export const AddFriendsPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen md:hidden lg:hidden bg-overlay_1">
        <Header title="Añadir amigos" />

        <div className="flex flex-col items-center mx-5 rounded-lg bg-overlay_2 h-1/3 justify-evenly">
          <HiUserAdd className="text-6xl text-custom_white" />

          <h1 className="text-3xl text-custom_white">Buscar amigos</h1>

          <p className="text-xl text-center text-custom_white">
            ¡Construye conexiones significativas!.
          </p>
        </div>

        {/* search bar  */}
        <SearchBar placeholder="Busca por nombre de usuario" />

        <NavBar />
      </div>
    </>
  );
};
