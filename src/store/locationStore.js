// /store/useModalStore.js
import { create } from "zustand";

export const useLocationModalStore = create((set) => ({
  isLocationModalOpen: false,
  openLocationModal: () => set({ isLocationModalOpen: true }),
  closeLocationModal: () => set({ isLocationModalOpen: false }),
}));
