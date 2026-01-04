import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

 type UserState = {
   hasFinished: boolean;
   toggleHasFinished: () => void;
 };

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      hasFinished: false,
      toggleHasFinished: () => {
        return set((state) => {
          return {
            ...state,
            hasFinished: !state.hasFinished,
          };
        });
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);