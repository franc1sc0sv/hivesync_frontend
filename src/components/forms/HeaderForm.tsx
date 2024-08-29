import { Link } from "react-router-dom"

export const HeaderForm = () => {
    return <div>
        <Link to={"/"} className="text-5xl text-center text-custom_white font-style: font-almarai font-bold">
            <img className="flex h-12 p-1" src="/public/logo.png"></img>
        </Link>
        <div className="h-4 bg-primary w-20  rounded-lg mx-auto my-5"></div>
    </div>
}