import BackgroundAnimation from "@/components/BackgroundAnimation";
import { DifferentMethods } from "./DifferentMethods";
import { GetADemo } from "./GetADemo";
import { Helping } from "./Helping";
import { JoinUs } from "./JoinUs";
import { ManageNow } from "./ManageNow";
import { NowMarketingSection } from "./NowMarketing";
import { OurClients } from "./OurClients";
import { Security } from "./Security";
import { ListBuild } from "./ListBuild";
import { Community } from "./Community";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingComponent from "@/components/LoadingComponent";
const DynamicComponent = dynamic(() => import("./Banner"));
const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <DynamicComponent />
      {/* <div className="bg-[#08021C] relative">
        <OurClients />
        <Security />
        <BackgroundAnimation />
      </div> */}

      <div className="relative">
        <ManageNow />
        <Helping />
        <div
          className="-z-1 w-full h-[130vh] absolute left-[30%] top-[30%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
      </div>
      <div className="relative">
        <DifferentMethods />

        <NowMarketingSection />
        {/* <Security /> */}
        <div
          className="-z-1 w-full h-[130vh] absolute right-0 top-[0%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="-z-1 w-full h-[130vh] absolute left-[40%] top-[30%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
      </div>

      <GetADemo />
    </div>
  );
};

export default HomeContainer;
