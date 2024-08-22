import { CalendarIcon } from "../../../../Icons/calendar";
import { RightTriangleIcon } from "../../../../Icons/rightTriangle";
import { UsersGroupIcon } from "../../../../Icons/usersGroup";

import { useCustomForm } from "../../../../../hooks/useForm";

import { useModal } from "../../../../../store/useModal";
import { ServerModals } from "../../../../modals/serverModals";

import { SearchBar } from "../../../../forms/Inputs/SearchBar";

export const HeaderServer = ({ name }: { name: string }) => {
  const api = () => console.log("hola, *llama a la api épicamente*");
  const success = () => console.log("success");

  const { onSubmit, register } = useCustomForm(api, success, "");

  const { setModalId } = useModal();

  return (
    <article className="flex flex-col gap-5 ">
      <div
        className="flex items-center w-fit"
        onClick={() => setModalId("serverInfo")}
      >
        <p className="text-2xl font-bold text-custom_white font-almarai ">
          {name}
        </p>
        <RightTriangleIcon size={20} color="white" />
      </div>

      <div className="flex gap-2">
        <form onSubmit={onSubmit}>
          <SearchBar
            register={register}
            name="searchInServer"
            bg_color="bg-overlay_1"
            placeholder="Buscar"
          />
        </form>

        <button
          className="flex justify-center items-center p-2 rounded-full w-12 bg-overlay_1"
          onClick={() => setModalId("membersList")}
        >
          <UsersGroupIcon size={24} color="white" />
        </button>

        <button
          className="flex justify-center items-center p-2 rounded-full w-12 bg-overlay_1"
          onClick={() => setModalId("events")}
        >
          <CalendarIcon size={24} color="white" />
        </button>
      </div>

      <ServerModals />
    </article>
  );
};
