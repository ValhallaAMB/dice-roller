import useUserStore from "@stores/useUserStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useResetError() {
  const { resetError } = useUserStore();
  const { pathname } = useLocation();

  useEffect(() => {
    resetError();
  }, [resetError, pathname]);
}
