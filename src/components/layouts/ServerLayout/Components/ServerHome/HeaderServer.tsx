import { HiUserAdd } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

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
        <HiChevronRight size={20} className="fill-white" />
      </div>

      <div className="flex gap-2">
        <SearchBar bg_color="bg-overlay_1" placeholder="Buscar" />

        <button className="p-2  rounded-full w-max bg-overlay_1"
          onClick={() => setModalId("addServerMembers")}>
          <HiUserAdd size={24} className="fill-white" />
        </button>

        <button className="p-2  rounded-full w-max bg-overlay_1"
          onClick={() => setModalId("events")}>
          <HiCalendarDays size={24} className="fill-white" />
        </button>
      </div>

      <ServerInfoModal />
      <AddServerMembersModal />
      <EventsModal />
    </article>

  );
};
