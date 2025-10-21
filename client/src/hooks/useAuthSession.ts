import useUserStore from "@stores/useUserStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAuthSession() {
  const { getUserSession } = useUserStore();
  const { pathname } = useLocation();

  async function fetchUserSession() {
    await getUserSession();
  }

  useEffect(() => {
    fetchUserSession();
  }, [pathname, getUserSession]);
}
