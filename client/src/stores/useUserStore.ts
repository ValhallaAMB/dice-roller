import { create } from "zustand";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  getCurrentUser,
  resetPassword,
  confirmResetPassword,
  updatePassword,
  deleteUser,
} from "@aws-amplify/auth";
import axios from "axios";
import toast from "react-hot-toast";
import type { SignUpForm } from "schemas/SignUpSchema";
import type { SignInForm } from "schemas/SignInSchema";
import type { User } from "types/User";
import type { ConfirmForgotPasswordForm } from "schemas/ConfirmForgotPasswordSchema";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  getUserSession: () => Promise<void>;
  registerUser: (user: SignUpForm) => Promise<Boolean>;
  confirmRegister: (email: string, code: string) => Promise<Boolean>;
  logIn: (user: SignInForm) => Promise<Boolean>;
  logOut: () => Promise<Boolean>;
  forgotPassword: (email: string) => Promise<Boolean>;
  confirmForgotPassword: (user: ConfirmForgotPasswordForm) => Promise<Boolean>;
  changePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<Boolean>;
  deleteAccount: () => Promise<Boolean>;
  resetError: () => void;
};

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const useUserStore = create<AuthState>((set, get) => ({
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

      console.log("User session:", session);

      const res = await axios.get(
        `${baseURL}/users/getCurrentUser/${session.userId}`,
      );

      console.log("Fetched user data:", res.data);

      set({
        user: {
          ...res.data,
          email: session.signInDetails?.loginId,
        },
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

  registerUser: async (newUser: SignUpForm) => {
    set({ loading: true });
    try {
      const { userId } = await signUp({
        username: newUser.email,
        password: newUser.password,
        options: {
          userAttributes: {
            email: newUser.email,
          },
        },
      });

      await axios.post(`${baseURL}/users/registerUser`, {
        cognitoSub: userId,
        username: newUser.username,
        pfpBase64: null,
      });

      toast.success(
        "Sign up successful! Please check your email for the confirmation code.",
      );

      set({
        error: null,
        isAuthenticated: false,
        user: {
          email: newUser.email,
          username: newUser.username,
          pfpBase64: null,
        },
      });

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to sign up" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  confirmRegister: async (email: string, code: string) => {
    set({ loading: true });
    try {
      await confirmSignUp({ username: email, confirmationCode: code });

      toast.success("Confirmation successful!");
      set({
        isAuthenticated: false,
        error: null,
        user: {
          email: email,
        },
      });

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to confirm sign up" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logIn: async (newUser: SignInForm) => {
    set({ loading: true });
    try {
      await signIn({
        username: newUser.email,
        password: newUser.password,
      });

      const session = await getCurrentUser();
      const res = await axios.get(
        `${baseURL}/users/getCurrentUser/${session.userId}`,
      );

      set({
        user: { ...res.data, email: newUser.email },
        isAuthenticated: !!session,
        error: null,
      });

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to sign in" });

      return false;
    } finally {
      set({ loading: false });
    }
  },

  logOut: async () => {
    set({ loading: true });
    try {
      await signOut();
      set({
        user: null,
        isAuthenticated: false,
        error: null,
      });

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to sign out" });

      return false;
    } finally {
      set({ loading: false });
    }
  },

  forgotPassword: async (email: string) => {
    set({ loading: true });
    try {
      await resetPassword({
        username: email,
      });
      set({ error: null, user: { email: email } });

      toast.success("Password reset code sent to your email!");

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to reset password" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  confirmForgotPassword: async (user: ConfirmForgotPasswordForm) => {
    set({ loading: true });
    try {
      await confirmResetPassword({
        username: user.email,
        confirmationCode: user.code,
        newPassword: user.newPassword,
      });
      set({ error: null, user: { email: user.email } });

      toast.success("Password reset successful!");

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to confirm password reset" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  changePassword: async (oldPassword: string, newPassword: string) => {
    set({ loading: true });
    try {
      await updatePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
      });

      set({ error: null });

      toast.success("Password changed successfully!");
      return true;
    } catch (error: any) {
      switch (error.name) {
        case "NotAuthorizedException":
          set({ error: "Incorrect old password" });
          break;
        default:
          set({ error: "Failed to change password" });
      }
      return false;
    } finally {
      set({ loading: false });
    }
  },

  deleteAccount: async () => {
    set({ loading: true });
    try {
      const currentUser = get().user;

      await axios.delete(
        `${baseURL}/users/deleteAccount/${currentUser?.cognitoSub}`,
      );
      await deleteUser();

      set({
        user: null,
        isAuthenticated: false,
        error: null,
      });
      toast.success("Account deleted successfully!");
      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to delete account" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  resetError: () => set({ error: null }),
}));

export default useUserStore;
