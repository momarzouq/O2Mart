import { create } from "zustand";

export const useDiscountModalStore = create((set) => ({
  showModal: false,
  openModal: () => set({ showModal: true }),
  closeModal: () => set({ showModal: false }),
}));
