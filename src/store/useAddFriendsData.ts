import { create } from "zustand";

type FriendsData = {
  id_request: string;
  id_who_sent: string;
  id_notification: string;
  user: UserProfile;
} | null;

type Props = {
  friendsData: FriendsData;
  setFriendsData: (value: FriendsData) => void;
};

const useAddFriendsData = create<Props>((set) => ({
  friendsData: null,
  setFriendsData: (value) => set({ friendsData: value }),
}));

export { useAddFriendsData };
