import { CalendarIcon } from "../../../../Icons/calendar";
import { RightTriangleIcon } from "../../../../Icons/rightTriangle";
import { UsersGroupIcon } from "../../../../Icons/usersGroup";

import { useModal } from "../../../../../store/useModal";


export const HeaderServer = ({ name }: { name: string }) => {

  const { setModalId } = useModal();

  return (
      <article className="flex flex-col gap-3 ">

      <div
        className="flex items-center gap-2 w-fit"
        onClick={() => setModalId("serverInfo")}
      >
        <p className="text-2xl font-bold text-custom_white font-almarai ">
          {name}
        </p>
        <RightTriangleIcon size={20} color="white" />
      </div>

      <div className="flex gap-2">
        <button
          className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-overlay_1"
          onClick={() => setModalId("membersList")}
        >
          <UsersGroupIcon size={24} color="white" />
        </button>

        <button
          className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-overlay_1"
          onClick={() => setModalId("events")}
        >
          <CalendarIcon size={24} color="white" />
        </button>
      </div>

      </article>
  );
};
