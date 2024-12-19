import { create } from "zustand";
type Total = { female: number; male: number };
type Store = {
  email: string;
  name: string;
  gift_to: string;
  people: any[];
  total: Total;
  setGift: (to: string) => void;
  setTotal: (total: Total) => void;
  setPeople: (to: any[]) => void;
  setNameAndEmail: (email: string, name: string) => void;
};

const useStore = create<Store>()((set) => ({
  email: "",
  name: "",
  gift_to: "",
  people: [],
  total: { female: 0, male: 0 },
  setGift: (to: string) => set(() => ({ gift_to: to })),
  setNameAndEmail: (email: string, name: string) =>
    set(() => ({
      name: name,
      email: email,
    })),
  setPeople: (data: any[]) => set(() => ({ people: data })),
  setTotal: (total: Total) => set(() => ({ total: total })),
}));

export default useStore;
