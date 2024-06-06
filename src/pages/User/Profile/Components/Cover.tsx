import { Link } from "react-router-dom"
import { HiCog } from "react-icons/hi";


// testing data
const temporaryRoute =
    "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";


export const ProfileCover: React.FC = () => {

    return (
        <div className="max-w-2xl text-gray-900 rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
            {/* cover  */}
            <div className="relative overflow-hidden rounded-xl h-36 bg-primary">
                {/* settings icon */}
                <SettingsPageButton />
            </div>

            {/* icon */}
            <div className="relative w-28 h-28 ml-5 -mt-20 overflow-hidden rounded-2xl">
                <img
                    className="object-cover object-center w-full h-full rounded-2xl"
                    src={temporaryRoute}
                    alt="Profile picture"
                />
            </div>
        </div>
    )
}

const SettingsPageButton: React.FC = () => {
    return (
        <Link to={`settings`} className="absolute top-0 right-0 p-3">
            <HiCog className="text-4xl text-custom_white" />
        </Link>
    )
}