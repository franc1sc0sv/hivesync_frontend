import { Link } from "react-router-dom";

interface PropsServerIcons extends ServerInfoIcons {
  isFolder?: boolean;
}

export const ServerIcon: React.FC<PropsServerIcons> = ({
  active,
  IconServerURL,
  url,
  name,
  isFolder = false,
}) => {
  const isIconUrlEmpty = IconServerURL.length === 0;
  const firstLetterName = name[0].toUpperCase();

  const imgBG = !isIconUrlEmpty ? `url(${IconServerURL})` : "";
  const borderStyleActive = active ? "rounded-2xl" : "rounded-full";
  const letterIconStyles = isIconUrlEmpty
    ? "grid place-items-center text-2xl text-white bg-secondary"
    : "";
  const folderStyles = isFolder ? "w-6 h-6 " : "w-16 h-16";

  return (
    <Link
      to={url}
      style={{ backgroundImage: imgBG }}
      className={`${folderStyles} ${borderStyleActive} ${letterIconStyles} `}
    >
      {isIconUrlEmpty ?? firstLetterName}
    </Link>
  );
};
