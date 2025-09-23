import axios from "axios";
import { create } from "zustand";
import type { User } from "../dtos/User.dto";

type UserState = {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
};

const BASE_URL = "http://localhost:3000";

const useUserStore = create<UserState>((set, get) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true });

    try {
      const res = await axios.get(`${BASE_URL}/api/users`);
      const data: User[] = await res.data;
      set({ users: data, error: null });
    } catch (error: any) {
      if (error.status == 429)
        set({ error: "Too many requests - try again later", users: [] });
      else set({ error: "Failed to fetch users", users: [] });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;
