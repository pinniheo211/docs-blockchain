import Footer from "@/components/Footer";
import AOS from "aos";
import dynamic from "next/dynamic";
import { useEffect } from "react";

export const MainLayout = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Header = dynamic(() => import("@/components/Header"), { ssr: false });
  const { children, hasFooter = true, hasHeader = true, hasBrandForm } = props;
  return (
    <div>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};
