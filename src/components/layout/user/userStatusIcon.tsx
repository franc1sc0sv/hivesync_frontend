
export interface IconProps {
    pictureRoute: string,
    isActive: boolean
}

export const UserStatusIcon: React.FC<IconProps> = ({ pictureRoute, isActive }) => {
    return (
        <>
            <div className="relative">
                <img className="w-12 h-12 rounded-full object-cover object-center" src={pictureRoute} alt="Profile picture" />

                <span className={`bottom-0 left-7 absolute  w-3.5 h-3.5 
                ${isActive ? `bg-green-400` : `bg-overlay_2`}  border border-white dark:border-gray-800 rounded-full`}></span>
            </div>
        </>
    );
}