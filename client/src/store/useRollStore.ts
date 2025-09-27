import { create } from "zustand";
import axios from "axios";
import type { Roll } from "../types/Roll";
import toast from "react-hot-toast";

type RollState = {
  rolls: Array<Roll>;
  loading: boolean;
  error: string | null;

  fetchRolls: () => Promise<void>;
  deleteRoll: (id: number) => void;
  createRoll: (userId: number, type: string, result: number) => void;
  deleteRolls: (ids: number[]) => void;
};

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const useRollStore = create<RollState>((set) => ({
  rolls: [],
  loading: false,
  error: null,

  fetchRolls: async () => {
    set({ loading: true });

    try {
      const res = await axios.get(`${baseURL}/rolls`);
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

  createRoll: async (userId: number, type: string, result: number) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${baseURL}/rolls`, {
        userId,
        type,
        result,
      });
      const newRoll: Roll = await res.data;
      set((prev) => ({ rolls: [newRoll, ...prev.rolls] }));
      toast.success("Roll saved");
    } catch (error) {
      toast.error("Failed to save roll");
    } finally {
      set({ loading: false });
    }
  },

  deleteRoll: async (id: number) => {
    set({ loading: true });
    try {
      await axios.delete(`${baseURL}/rolls/${id}`);
      set((prev) => ({
        rolls: prev.rolls.filter((roll) => roll.id !== id),
      }));
      toast.success("Roll deleted successfully");
    } catch (error) {
      toast.error("Failed to delete roll");
    } finally {
      set({ loading: false });
    }
  },

  deleteRolls: async (ids: number[]) => {
    set({ loading: true });
    try {
      await axios.delete(`${baseURL}/rolls`, { data: { ids } });
      set((prev) => ({
        rolls: prev.rolls.filter((roll) => !ids.includes(roll.id)),
      }));
      toast.success("Rolls deleted successfully");
    } catch (error) {
      toast.error("Failed to delete rolls");
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRollStore;
