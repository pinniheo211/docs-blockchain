import { useRouter } from "next/router";
import { useEffect } from "react";

const mainPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/docs/about/welcome");
  }, []);
  return <div></div>;
};
export default mainPage;
