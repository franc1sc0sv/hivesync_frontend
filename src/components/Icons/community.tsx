import { BiSolidGroup } from "react-icons/bi";

import { IconProps } from "./types/iconProps";

export const Community: React.FC<IconProps> = ({size, color}) => {
    return (
        <BiSolidGroup size={size} fill={color} />
    );
};