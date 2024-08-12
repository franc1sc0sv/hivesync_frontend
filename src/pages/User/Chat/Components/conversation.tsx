export const Conversation: React.FC = () => {
    return (
        <div className="w-full h-[70%] overflow-y-auto">
            <ReceivedMessage />
            <SentMessage />
        </div>
    )
}

export const ReceivedMessage: React.FC = () => {
    return (
        <div className="w-full my-3 flex items-center justify-start">

            <div className="bg-primary mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-e-xl rounded-es-xl">
                <p className="text-sm font-almarai py-2.5 text-gray-900 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export const SentMessage: React.FC = () => {
    return (
        <div className="w-full my-3 flex items-center justify-end">
            <div className="bg-overlay_2 mx-3 flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded rounded-se-none">
                <p className="text-sm font-almarai py-2.5 text-gray-900 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}