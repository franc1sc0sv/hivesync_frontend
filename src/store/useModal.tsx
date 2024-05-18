import { create} from 'zustand';

interface ModalState {
  modalState: boolean;
  toggleModal: (value: boolean) => void;
}

export const useModal = create<ModalState>((set) => ({
  modalState: false,
  toggleModal: (value: boolean) => set({ modalState: value }),
}));