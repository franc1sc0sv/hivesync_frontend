import { useSession } from "../../store/user";

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

  const firstLetterName = user?.username[0].toUpperCase();

  return (
    <div
      style={{
        height: `${h}rem`,
        width: `${w}rem`,
        fontSize: `${fontSize}rem`,
      }}
      className="grid font-medium text-white font-exo place-items-center rounded-2xl bg-secondary"
    >
      {firstLetterName}
    </div>
  );
};
