import { EditProfileOption } from "../../../components/buttons/EditProfileOption";
import { ProfileConnections } from "./Components/ProfileConnections";
import { HiCog } from "react-icons/hi";
import { GeneralLayout } from "../../../components/layouts/GeneralLayout/GeneralLayout";
import { Link } from "react-router-dom";

// testing data
const temporaryRoute =
  "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

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

export const ProfilePage: React.FC = () => {
  return (
    <GeneralLayout showHeader={false}>
      <section className="flex flex-col justify-around h-ful">
        {/* cover */}
        <div className="max-w-2xl text-gray-900 rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
          {/* cover  */}
          <div className="relative overflow-hidden rounded-xl h-36 bg-primary">
            {/* settings icon */}
            <Link to={`settings`} className="absolute top-0 right-0 p-3">
              <HiCog className="text-3xl text-custom_white" />
            </Link>
          </div>

          {/* icon */}
          <div className="relative w-32 h-32 mx-auto -mt-20 overflow-hidden border-4 rounded-full border-overlay_2">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src={temporaryRoute}
              alt="Profile picture"
            />
          </div>
        </div>

        {/* content container */}
        <div className="h-[60%] flex flex-col gap-5 overflow-y-auto">
          {/* Main profile options */}

          <div className="flex flex-col gap-2 p-3 rounded-lg bg-overlay_2 ">
            <div className="flex flex-col gap-1">
              <p className="text-2xl text-custom_white ">{user.name}</p>
              <p className="text-sm text-gray ">{user.username}</p>
            </div>

            <div className="flex items-center gap-5 w-full">
              <EditProfileOption title="Añadir estado" option={true} />
              <EditProfileOption title="Editar perfil" option={false} />
            </div>
          </div>

          {/* user info */}
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

          {/* connections */}
          <ProfileConnections
            spotifyLinked={true}
            spotifyUsername="Trabis_spotify"
            githubLinked={true}
            githubUsername="Trabis_github"
          />

          {/* your friends */}
          <div className="flex flex-row items-center justify-between p-3 rounded-lg bg-overlay_2">
            <h1 className="text-custom_white">Tus amigos</h1>

            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                className="object-cover object-center w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={temporaryRoute}
                alt="Friend Profile picture"
              />
              <img
                className="object-cover object-center w-10 h-10 border-2 border-white rounded-full dark:border-gray-"
                src={temporaryRoute}
                alt="Friend Profile picture"
              />
              <img
                className="object-cover object-center w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={temporaryRoute}
                alt="Friend Profile picture"
              />
              <img
                className="object-cover object-center w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={temporaryRoute}
                alt="Friend Profile picture"
              />
            </div>
          </div>
        </div>
      </section>
    </GeneralLayout>
  );
};
