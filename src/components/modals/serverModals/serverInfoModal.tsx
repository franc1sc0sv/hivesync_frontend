import { UserAddIcon } from "../../Icons/userAdd";
import { SettingsIcon } from "../../Icons/settings";
import { CalendarIcon } from "../../Icons/calendar";
import { FolderIcon } from "../../Icons/folder";
import { CategoryIcon } from "../../Icons/category";

import { ModalTemplate } from "../ModalTemplate";

import { useServer } from "../../layouts/ServerLayout/hooks/useServer";
import { useModal } from "../../../store/useModal";

interface MenuProps {
  icon: React.ReactNode;
  name: string;
  modal: string;
}

const quickOptions: MenuProps[] = [
  {
    icon: <UserAddIcon size={30} color="white" />,
    name: "Invitar miembros",
    modal: "membersList",
  },
  {
    icon: <SettingsIcon size={30} color="white" />,
    name: "Ajustes",
    modal: "",
  },
];

const serverOptions: MenuProps[] = [
  {
    icon: <FolderIcon size={30} color="white" />,
    name: "Crear canal",
    modal: "CreateChannel",
  },
  {
    icon: <CategoryIcon size={30} color="white" />,
    name: "Crear categoría",
    modal: "CreateCategory",
  },
  {
    icon: <CalendarIcon size={30} color="white" />,
    name: "Crear evento",
    modal: "events",
  },
];

export const ServerInfoModal: React.FC = () => {
  return (
    <ModalTemplate identificator="serverInfo">
      <div className="flex flex-col gap-10 w-full sm:w-4/5 mx-auto">
        <ServerCover />
        <ServerDetails />
        <ServerOptions />
      </div>
    </ModalTemplate>
  );
};

const ServerCover: React.FC = () => {
  const { selected_server } = useServer();

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full mx-auto text-gray-900 rounded-lg ">
        {/* cover  */}
        <div className="w-full relative overflow-hidden rounded-xl h-36 bg-secondary"></div>

        {/* icon */}
        <div className="absolute ml-5 -mt-16 overflow-hidden w-28 h-28 rounded-2xl">
          <ServerIcon
            name={selected_server.name}
            IconServerURL={selected_server.avatarURL}
          />
        </div>
      </div>
    </div>
  );
};

const ServerDetails: React.FC = () => {
  const { selected_server } = useServer();

  return (
    <div className="flex flex-col gap-5 pl-5">
      <p className="text-2xl font-bold font-almarai text-custom_white">
        {selected_server.name}
      </p>

      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-2">
          <div className="w-3 h-3 p-1 rounded-full bg-green"></div>
          <p className="text-lg text-custom_white text-almarai">1 en línea</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <div className="w-3 h-3 p-1 rounded-full bg-gray"></div>
          <p className="text-lg text-custom_white text-almarai">1 miembro/s</p>
        </div>
      </div>
    </div>
  );
};

const ServerOptions = () => {
  const { setModalId } = useModal();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
        {quickOptions.map((option, index) => (
          <div
            className="flex flex-row items-center gap-3"
            key={index}
            onClick={() => {
              setModalId(option.modal);
            }}
          >
            <div>
              <div className="p-2 text-3xl text-custom_white rounded-xl">
                {option.icon}
              </div>
            </div>
            <p className="text-custom_white">{option.name}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 p-3 bg-overlay_2 rounded-xl">
        {serverOptions.map((option, index) => (
          <div
            className="flex flex-row items-center gap-3"
            key={index}
            onClick={() => {
              setModalId(option.modal);
            }}
          >
            <div>
              <div className="p-2 text-3xl text-custom_white rounded-xl">
                {option.icon}
              </div>
            </div>
            <p className="text-custom_white">{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ServerIcon = ({
  IconServerURL,
  name,
}: {
  IconServerURL: string;
  name: string;
}) => {
  const isIconUrlEmpty = IconServerURL.length === 0;
  const firstLetterName = name[0].toUpperCase();

  const imgBG = !isIconUrlEmpty ? `url(${IconServerURL})` : "";
  const letterIconStyles = isIconUrlEmpty
    ? "text-white bg-primary font-medium"
    : "";

  return (
    <div
      style={{ backgroundImage: imgBG }}
      className={` w-24 h-24 rounded-full text-4xl z-50 font-exo lowercase  grid place-items-center ${letterIconStyles} `}
    >
      {isIconUrlEmpty && firstLetterName}
    </div>
  );
};
