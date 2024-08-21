import { PurpleButton } from "../../../../../../buttons/PurpleButton"

interface BoxProps {
    title: string,
    description: string
    children?: React.ReactNode
}

export const NoticeSomething: React.FC<BoxProps> = ({ title, description, children }) => {

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-start rounded-overlay bg-overlay_2 justify-evenly gap-5 p-4 w-fit">
                <div>
                    
                </div>
                <h1 className="text-3xl text-custom_white font-anaheim text-start w-[320px]">
                    {title}
                </h1>
                <p className="text-xl text-start text-gray font-almarai max-w-[400px]">
                    {description}
                </p>
                <div className="align self-start">
                {children}
            </div>
            </div>



        </div>

    )
}
