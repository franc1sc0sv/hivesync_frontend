import { useNavigate } from "react-router-dom"
import { Community } from "../../../Icons/community";
import { get_last_server } from "../GeneralLayout";
import { useEffect } from "react";
import { useServer } from "../../ServerLayout/hooks/useServer";





export const CommunityButton: React.FC = () => {
    const { server_data } = useServer();

    const navigate = useNavigate();
    const lastServer = get_last_server()
    const handleClick = () => {
        
        const areServers = server_data.length;
        if (areServers) {
          return navigate(`${lastServer}`)
        }
        else {
            navigate("testin")
        }
    }
    return (

        <div className=" font-almarai rounded-full w-14 h-14 bg-primary grid place-items-center cursor-pointer aspect-square"
            onClick={handleClick}
        >
            <Community size={25} color={"#ffffff"}/>
        </div>
    )
}
