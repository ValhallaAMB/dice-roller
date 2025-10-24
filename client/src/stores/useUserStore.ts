import { create } from "zustand";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  getCurrentUser,
  fetchUserAttributes,
  resetPassword,
  confirmResetPassword,
  updatePassword,
  deleteUser,
  updateUserAttribute,
  confirmUserAttribute,
} from "@aws-amplify/auth";
import axios from "axios";
import toast from "react-hot-toast";
import type { SignUpForm } from "schemas/SignUpSchema";
import type { SignInForm } from "schemas/SignInSchema";
import type { User } from "types/User";
import type { ConfirmForgotPasswordForm } from "schemas/ConfirmForgotPasswordSchema";
import type { AccountEditForm } from "schemas/AccountEditSchema";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  getCurrentUser: () => Promise<void>;
  registerUser: (newUser: SignUpForm) => Promise<Boolean>;
  confirmRegister: (email: string, code: string) => Promise<Boolean>;
  logIn: (currentUser: SignInForm) => Promise<Boolean>;
  logOut: () => Promise<Boolean>;
  forgotPassword: (email: string) => Promise<Boolean>;
  confirmForgotPassword: (
    currentUser: ConfirmForgotPasswordForm,
  ) => Promise<Boolean>;
  changePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<Boolean>;
  // updateUser now returns a tuple: [success, message]
  updateUser: (currentUser: AccountEditForm) => Promise<Boolean>;
  confirmUpdateUser: (code: string) => Promise<Boolean>;
  deleteAccount: () => Promise<Boolean>;
  resetError: () => void;
};

const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const useUserStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  getCurrentUser: async () => {
    set({ loading: true, error: null });
    try {
      const userAttributes = await fetchUserAttributes();
      if (!userAttributes) {
        set({ user: null, isAuthenticated: false, loading: false });
        return;
      }

      // console.log("User session:", userAttributes);

      const res = await axios.get(
        `${baseURL}/users/getCurrentUser/${userAttributes.sub}`,
      );

      // console.log("Fetched user data:", res.data);

      set({
        user: {
          ...res.data,
          email: userAttributes.email,
          username: userAttributes.preferred_username,
        },
        isAuthenticated: !!userAttributes,
        error: null,
      });

      // console.log("User session set in store", get().user);
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
    set({ loading: true, error: null });
    try {
      const { userId } = await signUp({
        username: newUser.email,
        password: newUser.password,
        options: {
          userAttributes: {
            email: newUser.email,
            preferred_username: newUser.username,
          },
        },
      });

      await axios.post(`${baseURL}/users/registerUser`, {
        cognitoSub: userId,
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
      if (error.response?.status === 409)
        set({ error: error.response.data.message });
      else set({ error: error.message || "Failed to sign up" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  confirmRegister: async (email: string, code: string) => {
    set({ loading: true, error: null });
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

      toast.success("Confirmation successful! You can now sign in.");

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to confirm sign up" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logIn: async (currentUser: SignInForm) => {
    set({ loading: true, error: null });
    try {
      await signIn({
        username: currentUser.email,
        password: currentUser.password,
      });

      const session = await getCurrentUser();
      const res = await axios.get(
        `${baseURL}/users/getCurrentUser/${session.userId}`,
      );

      set({
        user: { ...res.data, email: currentUser.email },
        isAuthenticated: !!session,
        error: null,
      });

      toast.success("Sign in successful!");

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to sign in" });

      return false;
    } finally {
      set({ loading: false });
    }
  },

  logOut: async () => {
    set({ loading: true, error: null });
    try {
      await signOut();
      set({
        user: null,
        isAuthenticated: false,
        error: null,
      });

      toast.success("Signed out successfully!");

      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to sign out" });

      return false;
    } finally {
      set({ loading: false });
    }
  },

  forgotPassword: async (email: string) => {
    set({ loading: true, error: null });
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

  confirmForgotPassword: async (currentUser: ConfirmForgotPasswordForm) => {
    set({ loading: true, error: null });
    try {
      await confirmResetPassword({
        username: currentUser.email,
        confirmationCode: currentUser.code,
        newPassword: currentUser.newPassword,
      });
      set({ error: null, user: { email: currentUser.email } });

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
    set({ loading: true, error: null });
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

  updateUser: async (updatedUser: AccountEditForm) => {
    set({ loading: true, error: null });
    try {
      let popModal = false;
      let success = false;
      const currentUser = get().user;

      if (updatedUser.email !== currentUser?.email) {
        await updateUserAttribute({
          userAttribute: {
            attributeKey: "email",
            value: updatedUser.email,
          },
        });
        popModal = true;
      }

      if (updatedUser.username !== currentUser?.username) {
        await updateUserAttribute({
          userAttribute: {
            attributeKey: "preferred_username",
            value: updatedUser.username,
          },
        });
        success = true;
      }

      // if (updatedUser.pfp !== currentUser?.pfpBase64) {
      //   await axios.patch(
      //     `${baseURL}/users/updateUser/${currentUser?.cognitoSub}`,
      //     {
      //       pfpBase64: updatedUser.pfp,
      //     },
      //   );
      //   success = true;
      // }

      if (popModal) toast("Please verify your new email address.");
      else if (success) toast.success("User updated successfully!");
      else toast("No changes made to update.");

      set({
        error: null,
      });
      return popModal;
    } catch (error: any) {
      if (error.response.status === 409)
        set({ error: error.response.data.message });
      else set({ error: error.message || "Failed to update user" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  confirmUpdateUser: async (code: string) => {
    set({ loading: true, error: null });
    try {
      await confirmUserAttribute({
        userAttributeKey: "email",
        confirmationCode: code,
      });

      await signOut();

      toast.success("Email updated successfully! Please sign in again.");
      set({ error: null });
      return true;
    } catch (error: any) {
      set({ error: error.message || "Failed to confirm user update" });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  deleteAccount: async () => {
    set({ loading: true, error: null });
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
