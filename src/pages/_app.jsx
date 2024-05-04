// import "../custom.css";
// import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import "./styles.css";
import LoadingComponent from "@/components/LoadingComponent";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
