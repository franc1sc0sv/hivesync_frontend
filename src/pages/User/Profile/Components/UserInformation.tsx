import { EditProfileOption } from "../../../../components/buttons/EditProfileOption";
import { AddStatusModal } from "../../../../components/modals/userModals/profile/AddStatusModal";
import { ProfileConnections } from "./ProfileConnections";
import { MyFriends } from "./YourFriends";

import useFakePages from "../../../../store/useFakePage";
import FakePageTemplate from "../../../../fakePages/FakePageTemplate";
import { EditProfileFakePage } from "../../../../fakePages/user/editProfileFakePage";


interface User {
  username: string;
  about: string;
  name: string;
  memberSince: string;
  spotify: boolean;
  github: boolean;
}

const user: User = {
  name: "FJ",
  username: "franc1sc0_sv",
  about: "En efecto, es una prueba",
  memberSince: "21 de septiembre de 2005",
  spotify: true,
  github: true,
};

export const UserInformation = () => {

  const { fakePages, addFakePage, removeFakePage } = useFakePages()

  return (
    <div className="h-[60%] flex flex-col gap-5 overflow-y-auto">
      {/* Main profile options */}

      <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
        <div className="flex flex-col gap-1">
          <p className="text-2xl text-custom_white ">{user.name}</p>
          <p className="text-sm text-gray ">{user.username}</p>
        </div>

        <div className="flex items-center justify-center w-full gap-5">
          <EditProfileOption
            title="Añadir estado"
            option={true}
            modalId="añadirEstado"
          />

          {/* edit profile buttom */}
          <div onClick={() => addFakePage({ title: "Editar perfil", children: <EditProfileFakePage /> })}>
            <EditProfileOption
              title="Editar perfil"
              option={false}
              modalId=""
            />
          </div>

          {/* edit profile fake page */}
          {fakePages.map((page) => (
            <FakePageTemplate
              key={page.id}
              isOpen={true}
              onClose={() => removeFakePage(page.id)}
              index={page.id}
              title={page.title}
              children={page.children}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3 rounded-lg bg-overlay_2">
        <div className="flex flex-col text-custom_white">
          <h3 className="text-lg">Sobre mi</h3>
          <p className="text-gray">{user.about}</p>
        </div>

        <div className="flex flex-col text-custom_white">
          <h3 className="text-lg">Miembro de HiveSync desde</h3>
          <p className="text-gray">{user.memberSince}</p>
        </div>
      </div>

      {/* <ProfileConnections
                spotifyLinked={true}
                spotifyUsername="Trabis_spotify"
                githubLinked={true}
                githubUsername="Trabis_github"
            /> */}

      {/* your friends */}
      <MyFriends />

      <AddStatusModal />
    </div>
  );
};
