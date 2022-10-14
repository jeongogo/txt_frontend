import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  currentUser: {
    id: '',
    email: '',
    name: '',
    accessToken: '',
    isAdmin: ''
  },
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
});

store = persist(store, { name: 'txt_auth', getStorage: () => localStorage });

const useStore = create(devtools(store));

export default useStore;