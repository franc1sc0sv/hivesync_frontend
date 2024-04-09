import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";


interface SearchProps {
    placeholder: string
}

export const SearchBar: React.FC<SearchProps> = ({ placeholder }) => {

    const [searchedFriend, setSearchedFriend] = useState<string>("");

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        console.log("*Busca épicamente*")
    }

    return (
        <>
            <form onSubmit={handleSearch} className="relative mx-auto w-[90%] max-w-md">
                <input
                    type="text"
                    value={searchedFriend}
                    onChange={(e) => setSearchedFriend(e.target.value)}
                    className="bg-overlay_2 w-full border-primary-500 rounded-md py-2 px-4 pr-10 placeholder-custom_white text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary transition duration-300"
                    placeholder={placeholder}
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button type="submit">
                        <IoSearch className="text-xl text-custom_white" />
                    </button>
                </div>
            </form>
        </>
    )
}