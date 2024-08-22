import { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { NotificationProps } from "./Notification";

import { ComponentsAnimator } from "../../../../components/animation/componentsAnimator";

export const RightButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const storedNotifications: NotificationProps[] = JSON.parse(localStorage.getItem("notifications") || "[]");
  const handleClearNotifications = () => {
    
    const filteredNotifications = storedNotifications.filter(notification =>
      notification.category === "Solicitudes"
    );
    localStorage.setItem("notifications", JSON.stringify(filteredNotifications));
    console.log(filteredNotifications);

    setIsMenuOpen(false);
    location.reload();
  };

  const handleClearFriendsRequest = () => {
    const filteredNotifications = storedNotifications.filter(notification =>
      notification.category !== "Solicitudes"
    );
    localStorage.setItem("notifications", JSON.stringify(filteredNotifications));
    console.log(filteredNotifications);
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
        <ComponentsAnimator>
          <div className="absolute right-0 mt-2 w-48 bg-overlay_2 shadow-lg rounded-lg">
            <ul>
              <li
                onClick={handleClearNotifications}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                <p className="text-custom_white text-md">Limpiar notificaciones</p>
              </li>
              <li
                onClick={handleClearFriendsRequest}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                <p className="text-custom_white text-md">Limpiar solicitudes</p>
              </li>
            </ul>
          </div>
        </ComponentsAnimator>
      )}
    </div>
  );
};
