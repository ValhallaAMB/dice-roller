import axios from "axios";
import { create } from "zustand";
import type { User } from "../dtos/User.dto";
import toast from "react-hot-toast";

type UserState = {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  deleteUser: (id: number) => void;
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

  deleteUser: async (id: number) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/users/${id}`);
      set(prev => ({
        users: prev.users.filter(user => user.id !== id)
      }))
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    } finally{
      set({ loading: false });
    }
  },
}));

export default useUserStore;
