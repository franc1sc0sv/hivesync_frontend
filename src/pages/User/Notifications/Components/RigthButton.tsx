import { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";

export const RightButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClearNotifications = () => {
    localStorage.removeItem("notifications");
    setIsMenuOpen(false);
    location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu}>
        <HiDotsVertical
          size={38}
          className="rotate-90 fill-custom_white bg-overlay_2 p-2 rounded-full"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-overlay_2 shadow-lg rounded-lg">
          <ul>
            <li
              onClick={handleClearNotifications}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              <p className="text-custom_white">Limpiar notificaciones</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
