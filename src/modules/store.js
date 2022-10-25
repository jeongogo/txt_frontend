import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  // 로그인 유저
  currentUser: {
    id: '',
    email: '',
    name: '',
    phoneNumber: '',
    height: '',
    weight: '',
    birthday: '',
    gender: '',
    isAdmin: '',
    accessToken: '',
  },
  recordUser: {
    id: '',
    name: ''
  },
  recordDetail: '',
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
  setRecordUser: (user) => set(() => ({ recordUser: user })),
  setRecordDetail: (data) => set(() => ({ recordDetail: data })),
});

store = persist(store, { name: 'txt_auth', getStorage: () => localStorage });

const useStore = create(devtools(store));

export default useStore;