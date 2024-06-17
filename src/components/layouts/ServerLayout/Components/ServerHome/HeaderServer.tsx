import { UserAddIcon } from "../../../../Icons/userAdd";
import { CalendarIcon } from "../../../../Icons/calendar";
import { RightTriangleIcon } from "../../../../Icons/rightTriangle";

import { useModal } from "../../../../../store/useModal";
import { ServerInfoModal } from "../../../../modals/serverModals/serverInfoModal";
import { AddServerMembersModal } from "../../../../modals/serverModals/addServerMemberModal";
import { EventsModal } from "../../../../modals/serverModals/eventsModal";

import { SearchBar } from "../../../../forms/Inputs/SearchBar";

export const HeaderServer = ({ name }: { name: string }) => {

  const { setModalId } = useModal();

  return (
    <article className="flex flex-col gap-5 ">
      <div className="flex items-center w-fit" onClick={() => setModalId("serverInfo")}>
        <p className="text-2xl font-bold text-custom_white font-almarai ">
          {name}
        </p>
        <RightTriangleIcon size={20} color="white" />
      </div>

      <div className="flex gap-2">
        <SearchBar bg_color="bg-overlay_1" placeholder="Buscar" />

        <button className="p-2  rounded-full w-max bg-overlay_1"
          onClick={() => setModalId("addServerMembers")}>
          <UserAddIcon size={24} color="white" />
        </button>

        <button className="p-2  rounded-full w-max bg-overlay_1"
          onClick={() => setModalId("events")}>
          <CalendarIcon size={24} color="white" />
        </button>
      </div>

      <ServerInfoModal />
      <AddServerMembersModal />
      <EventsModal />
    </article>

  );
};
