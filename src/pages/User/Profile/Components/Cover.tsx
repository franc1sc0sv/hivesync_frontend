import { Link } from "react-router-dom"
import { HiCog } from "react-icons/hi";

// testing data
import { userData } from "../../mocks/userData";

export const ProfileCover: React.FC = () => {

    return (
        <div className="w-full lg:w-4/5 mx-auto text-gray-900 rounded-lg">
            {/* cover  */}
            <div
                style={{ backgroundColor: userData.themeColor }}
                className={`relative overflow-hidden rounded-xl h-36`}>
                {/* settings icon */}
                <SettingsPageButton />
            </div>

            {/* icon */}
            <div className="relative w-28 h-28 ml-5 -mt-20 overflow-hidden rounded-2xl">
                <img
                    className="object-cover object-center w-full h-full rounded-2xl"
                    src={userData.picture}
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