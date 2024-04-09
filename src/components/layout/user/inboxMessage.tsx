import { UserStatusIcon } from "./userStatusIcon"
import { Link } from "react-router-dom"
import { IconProps } from "./userStatusIcon"

interface UserProps extends IconProps {
    username: string,
    messagePreview: string
    timeAgo: string
}

export const InboxMessage: React.FC<UserProps> = ({ pictureRoute, isActive, username, messagePreview, timeAgo }) => {
    const id = 1;
    return (
        <>
            <Link to={`:${id}`} className="flex flex-row items-center justify-around m-4">
                <div className="w-[20%]">
                    <UserStatusIcon pictureRoute={pictureRoute} isActive={isActive} />
                </div>

                <div className="w-[60%]">
                    <h1 className="text-custom_white text-lg">{username}</h1>
                    <p className="text-custom_white text-sm">{messagePreview}</p>
                </div>

                <div className="w-[20%]">
                    <h2 className="text-custom_white text-right text-sm">{timeAgo}</h2>
                </div>

            </Link>
        </>
    );
}