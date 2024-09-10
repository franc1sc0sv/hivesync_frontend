type Props = {
  w?: number;
  h?: number;

  stream: MediaStream | null;
  videoRef: React.RefObject<HTMLVideoElement>;
};

export const UserCameraStream: React.FC<Props> = ({
  w = 7,
  h = 7,
  stream,
  videoRef,
}) => {
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
          className="absolute top-0 left-0 object-cover w-full h-full rounded-xl"
        />
      )}
    </div>
  );
};
