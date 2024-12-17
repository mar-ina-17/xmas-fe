import { create } from "zustand";

type Store = {
  email: string;
  name: string;
  gift_to: string;
  setGift: (to: string) => void;
  setNameAndEmail: (email: string, name: string) => void;
};

const useStore = create<Store>()((set) => ({
  email: "",
  name: "",
  gift_to: "",
  setGift: (to: string) => set((state) => ({ gift_to: to })),
  setNameAndEmail: (email: string, name: string) =>
    set((state) => ({
      name: name,
      email: email,
    })),
}));

export default useStore;