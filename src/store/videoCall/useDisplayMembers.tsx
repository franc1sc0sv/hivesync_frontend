import { create } from 'zustand';

interface DisplayState {
  displayMembers: boolean
  setDisplayMembers: (displayMembers: boolean) => void;
}

const useDisplayMembers = create<DisplayState>((set) => ({
  displayMembers: true,
  setDisplayMembers: (displayMembers) => set({ displayMembers })
}));

export default useDisplayMembers;