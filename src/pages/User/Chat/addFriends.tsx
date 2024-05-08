import { SearchBar } from "../../../components/forms/Inputs/SearchBar";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { CardFriends } from "./Components/RightComponent";

export const AddFriendsPage: React.FC = () => {
  return (
    <GeneralLayout title="Añadir amigos">
      <section className="flex flex-col gap-10 my-10 w-full h-full">
        <CardFriends />
        <SearchBar placeholder="Busca por nombre de usuario" />
      </section>
    </GeneralLayout>
  );
};
