import { create } from "zustand";

interface LoginState {
  isVisible: boolean;
  isAllowed: boolean;
  toggleIsVisible: () => void;
  toggleIsAllowed: () => void;
}
const useLogin = create<LoginState>((set) => ({
  isVisible: false,
  isAllowed: false,
  toggleIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
  toggleIsAllowed: () => set((state) => ({ isAllowed: !state.isAllowed })),
}));

export default useLogin;
