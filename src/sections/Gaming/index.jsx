import BackgroundAnimation from "@/components/BackgroundAnimation";
import { SubBanner } from "@/components/SubBanner";
import { Banners } from "./Banner";
import { BiggerFaster } from "./BiggerFaster";
import { SuperFast } from "./SuperFast";
import { TopGame } from "./TopGame";
import { WhyToearnnow } from "./WhyToearnnow";
export const Gaming = () => {
  return (
    <div className="overflow-hidden relative">
      <Banners />
      <div className="relative">
        <SubBanner
          title={"Now Blockchain Games Kit"}
          des={
            "A collection of such tools and services being developed in the Now Blockchain ecosystem to empower game developers and accelerate the development of amazing web3 games on Now Blockchain."
          }
          button={"CHECK IT OUT"}
        />
        <BiggerFaster />
        <div
          className="z-1 w-full h-[130vh] absolute left-[30%]  top-0  bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
      </div>
      <SuperFast />
      <div className="relative">
        <TopGame />
        <div
          className="-z-1 w-full h-[130vh] absolute left-[30%] top-[30%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
      </div>
      <WhyToearnnow />
      <div className="pt-24">
        <SubBanner
          title={"Fund the development of your game"}
          des={
            "Take your first steps towards blockchain gaming with these Game Investment Funds"
          }
          button={"START BUILDING"}
          buttonTwo={"LEARN MORE"}
        />
      </div>
    </div>
  );
};
