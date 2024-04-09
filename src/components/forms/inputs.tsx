
type InputInformation = {
    title: string,
    placeholder: string,
    type: "text" | "email"

}

export const InputsForms: React.FC <InputInformation> = ({title,placeholder,type}) => {
    return (<>
        <div className="flex flex-col gap-4 w-3/5">
            <h3 className="text-lg text-custom_white font-almarai font-bold ">{title}</h3>
            <input className="bg-overlay_2 w-full p-3 rounded-xl" type={type} placeholder={placeholder} />
        </div>
    </>)
}
