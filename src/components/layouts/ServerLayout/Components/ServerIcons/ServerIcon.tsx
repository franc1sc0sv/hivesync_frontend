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
  const borderStyleActive = active ? "rounded-xl" : "rounded-full";
  const letterIconStyles = isIconUrlEmpty
    ? "grid place-items-center  text-white bg-secondary font-medium"
    : "";
  const folderStyles = isFolder ? "w-5 h-5 text-sm " : "w-14 h-14 text-4xl";

  return (
    <Link
      to={url}
      style={{ backgroundImage: imgBG }}
      className={` font-almarai ${folderStyles} ${borderStyleActive} ${letterIconStyles} `}
    >
      {isIconUrlEmpty && firstLetterName}
    </Link>
  );
};
