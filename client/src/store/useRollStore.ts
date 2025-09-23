import { create } from "zustand";
import axios from "axios";
import type { Roll } from "../dtos/Roll.dot";

type RollState = {
  rolls: Array<Roll>;
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
      const res = await axios.get(`${BASE_URL}/api/rolls`);
      const data: Roll[] = await res.data;
      set({ rolls: data, error: null });
    } catch (error: any) {
      if (error.status == 429)
        set({ error: "Too many requests - try again later", rolls: [] });
      else set({ error: "Failed to fetch rolls", rolls: [] });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRollStore;
