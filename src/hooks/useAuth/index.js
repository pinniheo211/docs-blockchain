import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLoggedInAccount, isAuthenticated, removeUser } from "@/until/auth";
import { PATHS } from "@/routes";
const useAuth = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);

  const local = typeof window !== "undefined";

  useEffect(() => {
    if (local) {
      if (isAuthenticated()) {
        setAccountInfo(getLoggedInAccount());
        setIsAuth(isAuthenticated());
      }
    }
  }, [local, isAuthenticated()]);

  const logout = useCallback((lang) => {
    setIsAuth(false);
    setAccountInfo(null);
    removeUser();
    if (lang === "vi") {
      router.push(PATHS.LOGIN);
    } else {
      router.push(PATHS.LOGIN);
    }
  }, []);

  return { isAuth, accountInfo, logout };
};

export default useAuth;
