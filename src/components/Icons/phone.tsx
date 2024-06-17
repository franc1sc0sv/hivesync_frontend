import { FaPhone } from "react-icons/fa6";

import { IconProps } from "./types/iconProps";

export const PhoneIcon: React.FC<IconProps> = ({size, color}) => {
    return (
        <FaPhone size={size} fill={color} />
    );
};