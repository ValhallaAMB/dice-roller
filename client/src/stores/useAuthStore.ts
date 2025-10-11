import { create } from "zustand";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  getCurrentUser,
} from "@aws-amplify/auth";
import axios from "axios";
import { toast } from "react-hot-toast/headless";
import type { SignUpForm } from "schemas/SignUpSchema";
import type { SignInForm } from "schemas/SignInSchema";
import type { User } from "types/User";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  getUserSession: () => Promise<void>;
  signUp: (user: SignUpForm) => Promise<void>;
  confirmSignUp: (email: string, code: string) => Promise<void>;
  signIn: (user: SignInForm) => Promise<void>;
  signOut: () => Promise<void>;
};

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  getUserSession: async () => {
    set({ loading: true });
    try {
      const session = await getCurrentUser();
      if (!session.userId) {
        set({ user: null, isAuthenticated: false, loading: false });
        return;
      }

      const res = await axios.post(`${baseURL}/users/getCurrentUser`, {
        cognitoSub: session.userId,
      });

      set({
        user: { ...res.data, email: session.signInDetails?.loginId },
        isAuthenticated: !!session,
        error: null,
      });
    } catch (error: any) {
      switch (error.name) {
        case "UserUnAuthenticatedException":
          set({ user: null, isAuthenticated: false });
          break;
        default:
          set({ error: "Failed to fetch user session" });
      }
    } finally {
      set({ loading: false });
    }
  },

  signUp: async (user: SignUpForm) => {
    set({ loading: true });
    try {
      const { userId } = await signUp({
        username: user.email,
        password: user.password,
        options: {
          userAttributes: {
            email: user.email,
          },
        },
      });

      const newUser = await axios.post(`${baseURL}/users/registerUser`, {
        cognitoSub: userId,
        username: user.username,
        pfpBase64: null,
      });

      toast.success(
        "Sign up successful! Please check your email for the confirmation code.",
      );

      set({
        error: null,
        user: {
          ...newUser.data,
          email: user.email,
        },
      });
    } catch (error: any) {
      set({ error: "failed to sign up" });
    } finally {
      set({ loading: false });
    }
  },

  confirmSignUp: async (email: string, code: string) => {
    set({ loading: true });
    try {
      await confirmSignUp({ username: email, confirmationCode: code });

      toast.success("Confirmation successful!");
      const session = await getCurrentUser();
      set({
        isAuthenticated: !!session,
        error: null,
      });
    } catch (error) {
      set({ error: "Failed to confirm sign up" });
    } finally {
      set({ loading: false });
    }
  },

  signIn: async (user: SignInForm) => {
    set({ loading: true });
    try {
      await signIn({
        username: user.email,
        password: user.password,
      });

      const session = await getCurrentUser();

      const res = await axios.post(`${baseURL}/users/getCurrentUser`, {
        cognitoSub: session.userId,
      });

      set({
        user: { ...res.data, email: user.email },
        isAuthenticated: !!session,
        error: null,
      });

    } catch (error: any) {
      switch (error.name) {
        case "NotAuthorizedException":
          set({ error: "Incorrect username or password" });
          break;
        case "UserNotFoundException":
          set({ error: "User does not exist" });
          break;
        default:
          set({ error: "Failed to sign in" });
      }
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    set({ loading: true });
    try {
      await signOut();
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({ error: "Failed to sign out" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAuthStore;
