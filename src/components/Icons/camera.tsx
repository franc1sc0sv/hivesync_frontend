import { BsFillCameraFill } from "react-icons/bs";

import { IconProps } from "./types/iconProps";

export const CameraIcon: React.FC<IconProps> = ({size, color}) => {
    return (
        <BsFillCameraFill size={size} fill={color} />
    );
};