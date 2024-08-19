import useVideoStream from "../../../../../../../store/videoCall/useCameraStream";
import { useRef, useEffect } from "react";

type Props = {
    w?: number;
    h?: number;
};
export const UserCameraStream: React.FC<Props> = ({ w = 7, h = 7 }) => {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { stream } = useVideoStream();

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <div
            style={{
                height: `${h}rem`,
                width: `${w}rem`,
            }}
            className="grid font-medium text-white font-exo place-items-center rounded-2xl bg-secondary"
        >
            {stream && (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="rounded-xl absolute top-0 left-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
};