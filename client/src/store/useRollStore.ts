import { create } from "zustand";
import axios from "axios";

type RollState = {
  rolls: Array<object>;
  loading: boolean;
  error: string | null;

  fetchRolls: () => Promise<void>;
};

const BASE_URL = "http://localhost:3000";

const useRollStore = create<RollState>((set, get) => ({
  rolls: [],
  loading: false,
  error: null,

  fetchRolls: async () => {
    set({ loading: true });

    try {
      const res = await axios.get(`${BASE_URL}/api/rolls`).then((response) => {
        set({ rolls: response.data, error: null });
      });
    } catch (error: any) {
      if (error.status == 429)
        set({ error: "Too many requests - try again later" });
      else 
        set({ error: "Failed to fetch rolls" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRollStore;
