import useUserStore from "@stores/useUserStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAuthSession() {
  const { getCurrentUser } = useUserStore();
  const { pathname } = useLocation();

  async function fetchUserSession() {
    await getCurrentUser();
  }

  useEffect(() => {
    fetchUserSession();
  }, [pathname, getCurrentUser]);
}
