// stores/authStore.ts
import { create, StoreApi } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStore = {
  accessToken: string | null;
  isLogin: boolean;
  hasHydrated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      accessToken: null,
      isLogin: false,
      hasHydrated: false,

      login: (token: string) => {
        set({ accessToken: token, isLogin: true });
      },

      logout: () => {
        set({ accessToken: null, isLogin: false });
      },
    }),
    {
      name: 'auth-storage', // AsyncStorage에 저장될 키 이름
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        return state => {
          if (state) {
            state.hasHydrated = true;
          }
        };
      },
    },
  ),
);

export default useAuthStore;
