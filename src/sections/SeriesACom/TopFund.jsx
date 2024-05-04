import { Avatar } from "@mui/material";
import top1Fund from "@/assets/icon/top1Fund.png";
import top2Fund from "@/assets/icon/top2Fund.png";
import Image from "next/image";
import logoCoin from "@/assets/icon/logoToken.png";

export const TopFund = () => {
  return (
    <div>
      <div className="bg-gradient-purple-fund w-full px-3 py-5 text-center rounded-t-xl">
        <div className="flex items-center justify-center gap-4">
          <Image src={logoCoin} width={30} height={30} />
          <h1 className="text-white font-bold text-2xl">
            Rating Fund participation
          </h1>
        </div>
      </div>
      <div className="w-full flex items-end bg-gradient-purple-fund justify-between bg-cover bg-center bg-no-repeat py-[40px] gap-3 h-auto  container rounded-b-xl">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <Avatar />
          <div className="text-center">
            <p className="text-xs text-white">Top 4</p>
            <p className="text-[8px] text-white">(4M NOWC)</p>
          </div>
        </div>
        <div className="flex mb-5 flex-col gap-2 justify-center items-center">
          <Image src={top2Fund} width={100} height={100} alt="top1" />
          <div className="text-center">
            <p className="text-base text-yellow">Top 2</p>
            <p className="text-[8px] text-white">(10M NOWC)</p>
          </div>
        </div>
        <div className="mb-20 flex flex-col gap-2 justify-center items-center ">
          <Image src={top1Fund} width={100} height={100} alt="top1" />
          <div className="text-center">
            <p className="text-base text-pink font-semibold">Top 1</p>
            <p className="text-[8px] text-white">(20M NOWC)</p>
          </div>
        </div>
        <div className="flex mb-5 flex-col gap-2 justify-center items-center">
          <Image src={top2Fund} width={100} height={100} alt="top1" />
          <div className="text-center">
            <p className="text-base text-yellow">Top 3</p>
            <p className="text-[8px] text-white">(5M NOWC)</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 ">
          <Avatar />
          <div className="text-center">
            <p className="text-xs text-white">Top 5</p>
            <p className="text-[8px] text-white">(3M NOWC)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
