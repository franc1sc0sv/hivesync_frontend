import { useSession } from "../../store/user";
import { useRef, useEffect } from "react";
import useVideoStream from "../../store/videoCall/useCameraStream";

type Props = {
  w?: number;
  h?: number;
  fontSize?: number;
};

export const UserAvatar: React.FC<Props> = ({
  w = 7,
  h = 7,
  fontSize = 3.75,
}) => {
  const { user } = useSession();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { stream } = useVideoStream();

  const firstLetterName = user?.username[0].toUpperCase();

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
        fontSize: `${fontSize}rem`,
        display: stream ? "hidden" : "block"
      }}
      className="relative grid font-medium text-white font-exo place-items-center rounded-2xl bg-secondary overflow-hidden"
    >
      {stream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        firstLetterName
      )}
    </div>
  );
};
