import useAuthStore from "@stores/useAuthStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useResetError() {
  const { resetError } = useAuthStore();
  const { pathname } = useLocation();

  useEffect(() => {
    resetError();
  }, [resetError, pathname]);
}