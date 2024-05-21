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
    )
}