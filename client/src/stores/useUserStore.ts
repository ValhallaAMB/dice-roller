import axios from "axios";
import { create } from "zustand";
import type { userWithoutId, User } from "../types/User";
import toast from "react-hot-toast";

type UserState = {
  user: User;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  createUser: (user: userWithoutId) => Promise<void>;
  deleteUser: (id: number) => void;
};

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const useUserStore = create<UserState>((set) => ({
  user: {} as User,
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true });

    try {
      const res = await axios.get(`${baseURL}/users`);
      const data: User = await res.data;
      set({ user: data, error: null });
    } catch (error: any) {
      if (error.status == 429)
        set({ error: "Too many requests - try again later", user: {} as User });
      else set({ error: "Failed to fetch users", user: {} as User });
    } finally {
      set({ loading: false });
    }
  },

  createUser: async (user: userWithoutId) => {
    set({ loading: true });

    try {
      const res = await axios.post(`${baseURL}/users`, user);
      const newUser: User = await res.data;
      toast.success("User created successfully");
      set({ user: newUser, error: null });
    } catch (error) {
      toast.error("Failed to create user");
      set({ error: "Failed to create user" });
    } finally {
      set({ loading: false });
    }
  },

  deleteUser: async (id: number) => {
    set({ loading: true });
    try {
      await axios.delete(`${baseURL}/users/${id}`);
      set({ user: {} as User, error: null });
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;
