import { useNavigate } from "react-router-dom"
import { Community } from "../../../Icons/community";
import { get_last_server } from "../GeneralLayout";
import { useServer } from "../../ServerLayout/hooks/useServer";

export const CommunityButton: React.FC = () => {
    const { server_data } = useServer();

    const navigate = useNavigate();
    const lastServer = get_last_server()
    const handleClick = () => {
        
        // const areServers = server_data.length;
        // if (areServers) {
        //   return navigate(`${lastServer}`)
        // }
        // else {
        //     navigate("testin")
        // }
        
        navigate("/app/testin");
    }
    return (

        <div className=" font-almarai rounded-full w-auto h-14 bg-primary grid place-items-center cursor-pointer aspect-square"
            onClick={handleClick}
        >
            <Community size={25} color={"#ffffff"}/>
        </div>
    )
}
