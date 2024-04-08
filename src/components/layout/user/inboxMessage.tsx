import { UserStatusIcon } from "./userStatusIcon"
import { Link } from "react-router-dom"
import { IconProps } from "./userStatusIcon"

interface UserProps extends IconProps {
    username: string,
    messagePreview: string
    timeAgo: string
}

export const InboxMessage: React.FC<UserProps> = ({ pictureRoute, isActive, username, messagePreview, timeAgo }) => {
    const id: number = 1;
    return (
        <>
            <Link to={`:${id}`} className="flex flex-row items-center justify-around m-5">
                <div className="w-[20%]">
                    <UserStatusIcon pictureRoute={pictureRoute} isActive={isActive} />
                </div>

                <div className="w-[60%]">
                    <h1 className="text-custom_white">{username}</h1>
                    <p className="text-custom_white">{messagePreview}</p>
                </div>

                <div className="w-[20%]">
                    <h2 className="text-custom_white text-right">{timeAgo}</h2>
                </div>

            </Link>
        </>
    );
}