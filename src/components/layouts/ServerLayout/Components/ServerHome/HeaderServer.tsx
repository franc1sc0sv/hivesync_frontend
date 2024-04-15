import { FaGear } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";

import { SearchBar } from "../../../../forms/SearchBar";

export const HeaderServer = ({ name }: { name: string }) => {
  return (
    <article className="flex flex-col gap-5 ">
      <div className="flex items-center justify-between w-full">
        <p className="text-2xl font-bold text-custom_white font-almarai ">
          {name}
        </p>
        <FaGear size={24} className="fill-custom_white" />
      </div>
      <div className="flex gap-2">
        <SearchBar bg_color="bg-overlay_1" placeholder="Buscar" />
        <button className="p-2  rounded-full w-max bg-overlay_1">
          <HiUserAdd size={24} className="fill-white" />
        </button>
      </div>
    </article>
  );
};
