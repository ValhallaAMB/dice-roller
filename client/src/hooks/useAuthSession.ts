import useAuthStore from "@stores/useAuthStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAuthSession() {
  const { getUserSession } = useAuthStore();
  const { pathname } = useLocation();

  async function fetchUserSession() {
    await getUserSession();
  }

  useEffect(() => {
    fetchUserSession();
    // console.log("Checking user session...", user);
  }, [pathname]);
}
