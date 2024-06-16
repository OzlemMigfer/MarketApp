import { create } from 'zustand'
import useAuthStore from './auth/authSlice';
import useBranchStore from './branch/branchSlice';

const useStore = create(() => ({
  ...useAuthStore.getState(),
  ...useBranchStore.getState(),
}));

export default useStore;