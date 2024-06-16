import { create } from 'zustand';
import { fetchBranch, addBranch } from './branchService';

const useBranchStore = create((set) => ({
  branches: [],
  fetchBranch: async () => {
      try {
          const data = await fetchBranch();
          set({ branches: data });
          console.log("slice data", data); 
      } catch (error) {
          console.error('Error fetch branches:', error.message);
          set({ branches: [] });
      }
  },
  addBranch: async (branchName) => {
    try {
      const newBranch = await addBranch(branchName);
      set((state) => ({
        branches: [...state.branches, newBranch],
      }));
    } catch (error) {
      console.error('Error add branch:', error.message);
    }
  },
}));

export default useBranchStore;