import { create } from 'zustand';
import { signIn } from '../auth/authService';

const useAuthStore = create((set) => ({
  user: null,
  signIn: async (email, password) => {
    try {
      const user = await signIn(email, password);
      set({ user });
    } catch (error) {
      console.error('Error signin:', error.message);
    }
  },
}));

export default useAuthStore;