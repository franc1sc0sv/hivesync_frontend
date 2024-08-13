import { FileIcon } from "../../../../components/Icons/file";
import { CameraIcon } from "../../../../components/Icons/camera"
import { MicrophoneIcon } from "../../../../components/Icons/microphone";
import { SendIcon } from "../../../../components/Icons/send";

export const MessageInput: React.FC = () => {
    return (
        <div className="w-[95%] flex flex-row items-center justify-between p-3 mx-auto my-3 rounded-xl bg-overlay_2 gap-3">

            <div className="mx-auto w-1/3 sm:w-fit flex lg:justify-start justify-center items-center flex-row gap-5">
                <FileIcon size={30} color="#fff" />
                <MicrophoneIcon size={30} color="#fff" />
                <CameraIcon size={30} color="#fff" />
            </div>

            <div className="sm:w-4/5 relative mx-auto">
                <input
                    // {...register(name)}
                    placeholder="Escribe un mensaje"
                    type="text"
                    className="w-full bg-overlay_2 px-4 py-2 pr-10 transition duration-300 rounded-overlay border-custom_white border-2 placeholder-custom_white text-custom_white focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary"
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button type="submit">
                        <SendIcon size={20} color="white" />
                    </button>
                </div>
            </div>

        </div>
    )
}

