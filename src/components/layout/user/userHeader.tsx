import { FaAngleDown } from "react-icons/fa";

export const UserHeader: React.FC<{title: string}> = ({title})  => {
    return (
        <>
            <header className="md:hidden lg:hidden sm:h-1/4 p-4 bg-overlay_1 flex flex-row items-center gap-2">
                
                <div className="flex flex-row items-center gap-2">
                    <FaAngleDown className="text-custom_white text-3xl" />
                    <h1 className="text-custom_white text-3xl">{title}</h1>
                </div>

            </header>

        </>
    );
}