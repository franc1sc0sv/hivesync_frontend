import { FormEvent, useState } from "react";
import { SearchIcon } from "../../Icons/search";

interface SearchProps {
  placeholder: string;
  bg_color?: string
}

export const SearchBar: React.FC<SearchProps> = ({ placeholder, bg_color = "bg-overlay_2" }) => {
  const [searchedFriend, setSearchedFriend] = useState<string>("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    console.log("*Busca épicamente*");
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="relative mx-auto w-full max-w-md"
      >
        <input
          type="text"
          value={searchedFriend}
          onChange={(e) => setSearchedFriend(e.target.value)}
          className={`${bg_color} w-full px-4 py-2 pr-10 transition duration-300 rounded-overlay  border-primary-500 placeholder-custom_white text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary`}
          placeholder={placeholder}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button type="submit">
            <SearchIcon size={20} color="white" />
          </button>
        </div>
      </form>
    </>
  );
};
