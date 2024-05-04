import Image from "next/image";
import frame1 from "@/assets/images/environ/Frame-1.png";
import { ReportLeft } from "./style";
export const Report = () => {
  return (
    <div className="container flex flex-col items-center mt-20">
      <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center gap-5 lg:gap-7 xl:gap-10 w-full">
        <ReportLeft
          data-aos="fade-up"
          className="md:w-1/2 w-full flex flex-col gap-5"
        >
          <h1 className="text-4xl 2xl:text-5xl font-semibold text-white ">
            Neutralizing Now blockchain's carbon impact
          </h1>
          <p className="text-base break-words xl:text-lg">
            The NOW BLOCKCHAIN Foundation is committed to studying the impact of
            the NOW BLOCKCHAIN, open-sourcing the data, and taking steps to
            bring the chain’s footprint to zero.
          </p>
          <p className="text-base break-words xl:text-lg">
            NOW BLOCKCHAIN is the first smart-contract layer 1 blockchain with
            real-time energy emissions tracking, enabling anyone in the world to
            examine the network’s emissions down to the validator or RPC level.
          </p>
        </ReportLeft>
        <div className="w-full md:w-1/2">
          <Image data-aos="fade-up" src={frame1} alt="Banner" />
        </div>
      </div>
    </div>
  );
};
