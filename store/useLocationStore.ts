// stores/LocationStore.ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LocationStore = {
  address: string;
  setAddress: (address: string) => void;
};

const useLocationStore = create<LocationStore>()(
  persist(
    set => ({
     address: "",

     setAddress: (address: string) => set({address: address}) 
    }),
    {
      name: 'location-storage', // AsyncStorage에 저장될 키 이름
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useLocationStore;
