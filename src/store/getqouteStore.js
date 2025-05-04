import { create } from 'zustand';

const useModalStore = create((set) => ({
  isInquiryModalOpen: false,
  openInquiryModal: () => set({ isInquiryModalOpen: true }),
  closeInquiryModal: () => set({ isInquiryModalOpen: false }),
}));

export default useModalStore;
