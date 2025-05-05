// store/modalStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useCartStore;
