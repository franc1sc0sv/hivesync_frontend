import { SearchBar } from "../../../components/forms/Inputs/SearchBar";
import { CardFriends } from "./Components/RightComponent";

export const AddFriendsPage: React.FC = () => {
  return (
      <section className="flex flex-col gap-10 my-10 w-full h-full">
        <CardFriends />
        <SearchBar placeholder="Busca por nombre de usuario" />
      </section>
  );
};
