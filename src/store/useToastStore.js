// src/store/useToastStore.js
import { create } from "zustand";
import { toast } from "react-toastify";

export const useToastStore = create((set) => ({
  showToast: (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  },
}));
