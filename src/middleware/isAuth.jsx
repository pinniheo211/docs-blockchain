/* eslint-disable react/display-name */
import auth from "@/until/auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const isAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [checkAuth, setAuth] = useState(false);
    useEffect(() => {
      const user = auth();
      if (!user && !renderRouterAccept.includes(pathname)) {
        // setAuth(true); //note
        // router.replace("/login");
        router.replace("/");
        // setAuth(true);
      } else if (user && renderRouterAccept.includes(pathname)) {
        router.replace("/");
      } else {
        setAuth(true);
        // router.replace("/");
      }
    }, [router, pathname]);

    if (checkAuth) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default isAuth;

const renderRouterAccept = [
  // "/login",
  // "/signup",
  // "/forgot-password",
  // "/verify-you",
];
