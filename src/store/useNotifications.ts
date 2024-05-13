import { create } from "zustand";
import { Notifications } from "../types/notifications";

const useNotifications = create<Notifications>((set) => ({
  notifications: [],
  setNotifications: (notification) =>
    set((state) => ({
      notifications:
        state.notifications.length < 2
          ? [...state.notifications, notification]
          : state.notifications,
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((_, i) => i !== id),
    })),
}));

export { useNotifications };
