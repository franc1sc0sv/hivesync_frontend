import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiMiniBell } from "react-icons/hi2";
import { UserStatusIcon } from "./userStatusIcon";

const temporaryRoute = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";


export const NavBar: React.FC = () => {
    return (
        <>
            <div className="md:hidden lg:hidden p-4 mx-5 my-2 rounded-lg bg-overlay_2 flex flex-row justify-around items-center">
                <Link to={"comunity"}>
                    <HiUserGroup className="text-custom_white text-3xl" />
                </Link>

                <Link to={"/app"}>
                    <HiChatBubbleLeftRight className="text-custom_white text-3xl" />
                </Link>

                <Link to={"/app"}>
                    <HiMiniBell className="text-custom_white text-3xl" />
                </Link>


                <div className="flex flex-shrink-0">
                    <UserStatusIcon pictureRoute={temporaryRoute} isActive={true} />
                </div>
            </div>
        </>
    );
}