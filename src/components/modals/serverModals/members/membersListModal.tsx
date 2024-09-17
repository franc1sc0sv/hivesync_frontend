import { ModalTemplate } from "../../ModalTemplate";
import { useModal } from "../../../../store/useModal";

import { UserAddIcon } from "../../../Icons/userAdd";

const temporaryRoute =
  "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

const members = [{ username: "arsene_lupin", picture: temporaryRoute }];

export const MembersListModal: React.FC = () => {
  return (
    <ModalTemplate identificator="membersList">
      <MembersList />
    </ModalTemplate>
  );
};

const MembersList: React.FC = () => {
  return (
    <div className="h-full w-full lg:w-3/5 mx-auto p-1 flex flex-col gap-5">
      <p className="text-2xl text-custom_white text-center">
        Miembros del servidor
      </p>
      <Header />
      <List />
    </div>
  );
};

const Header: React.FC = () => {
  const { setModalId } = useModal();

  return (
    <div className="w-full flex flex-row justify-between items-center gap-5">
      <div className="w-full lg:w-1/3">
        <button
          onClick={() => setModalId("addServerMembers")}
          className="flex flex-row flex-wrap items-center justify-center mx-auto gap-2 sm:h-1/4 bg-overlay_1"
        >
          <UserAddIcon size={30} color="white" />
          <h2 className="text-custom_white text-md">Añadir miembros</h2>
        </button>
      </div>
    </div>
  );
};

const List: React.FC = () => {
  return (
    <div className="h-4/5 overflow-y-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between p-3 my-2 rounded-xl bg-overlay_2"
        >
          <div className="flex flex-row items-center gap-5 rounded-2xl">
            <img
              className="object-cover object-center w-14 h-14 rounded-full"
              src={member.picture}
              alt="Profile picture"
            />
            <p className="text-xl text-custom_white font-almarai">
              {member.username}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
