import { EditProfileOption } from "../../../../components/buttons/EditProfileOption";
import { AddStatusModal } from "../../../../components/modals/userModals/profile/AddStatusModal";
import { ProfileConnections } from "./ProfileConnections";

import useFakePages from "../../../../store/useFakePage";
import { ShowFakePages } from "../../../../components/fakePages/ShowFakePages";
import { EditProfileFakePage } from "../../../../components/fakePages/user/profile/editProfileFakePage";
import { UserFriendsFakePage } from "../../../../components/fakePages/user/friends/FriendsFakePage";

const temporaryRoute =
  "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";


interface User {
  username: string;
  about: string;
  name: string;
  status: string,
  memberSince: string;
  spotify: boolean;
  github: boolean;
}

const displayName = localStorage.getItem("name");
const aboutUser = localStorage.getItem("aboutUser");
const userStatus = localStorage.getItem("userStatus");

const user: User = {
    name: displayName ? displayName : "FJ",
    username: "franc1sc0_sv",
    about: aboutUser ? aboutUser : "En efecto, es una prueba",
    status: userStatus ? userStatus : "estoy sentado",
    memberSince: "21 de septiembre de 2005",
    spotify: true,
    github: true,
};

const friendsMiniPictures = [
  { picture: temporaryRoute },
  { picture: temporaryRoute },
  { picture: temporaryRoute },
  { picture: temporaryRoute },
]

export const UserInformation = () => {


  return (
    <div className="h-3/5 w-full lg:w-4/5 mx-auto flex flex-col gap-5 overflow-y-auto">
      {/* Main profile options */}

      <MainInformation />
      <AboutUser />
      {/* <ProfileConnections
                spotifyLinked={true}
                spotifyUsername="Trabis_spotify"
                githubLinked={true}
                githubUsername="Trabis_github"
            /> */}


      {/* your friends */}
      <UserFriends />
      <ShowFakePages />
      <AddStatusModal />
    </div>
  );
};

const MainInformation: React.FC = () => {

  const { addFakePage } = useFakePages()

  return (
    <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
      <div className="flex flex-col gap-1">
        <p className="text-2xl text-custom_white ">{user.name}</p>
        <p className="text-sm text-gray ">{user.username}</p>
      </div>

      <div className="w-full flex items-center justify-center lg:justify-start gap-5">
        <EditProfileOption
          title="Añadir estado"
          option={true}
          modalId="añadirEstado"
        />

        {/* edit profile fake page button */}
        <div onClick={() => addFakePage({ title: "Editar perfil", children: <EditProfileFakePage /> })}>
          <EditProfileOption
            title="Editar perfil"
            option={false}
            modalId=""
          />
        </div>
      </div>
    </div>
  )
}

const AboutUser = () => {

  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg bg-overlay_2">
      <div className="flex flex-col text-custom_white">
        <h3 className="text-lg">Sobre mí</h3>
        <p className="text-gray">{user.about}</p>
      </div>

      <div className="flex flex-col text-custom_white">
        <h3 className="text-lg">Mi estado</h3>
        <p className="text-gray">{user.status}</p>
      </div>

      <div className="flex flex-col text-custom_white">
        <h3 className="text-lg">Miembro de HiveSync desde</h3>
        <p className="text-gray">{user.memberSince}</p>
      </div>
    </div>
  )
}

const UserFriends = () => {

  const { addFakePage } = useFakePages();

  return (
      <div 
      onClick={() => addFakePage({title: "Mis amigos", children: <UserFriendsFakePage />})}
      className="flex flex-row items-center justify-between p-3 rounded-lg bg-overlay_2">
        <h1 className="text-custom_white">Mis amigos</h1>

        <div className="flex -space-x-4 rtl:space-x-reverse">
          {friendsMiniPictures.map((friend, index) => (
            <img
              key={index}
              className="object-cover object-center w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={friend.picture}
              alt="Friend Profile picture"
            />
          ))}
        </div>

      </div>

  );
}