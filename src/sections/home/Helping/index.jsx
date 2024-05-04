import CountUp from "react-countup";
import { Underline } from "../style";
import { CardData } from "./helper";
import { CardTitle, Line, TitleCard } from "./style";
import DotGrid from "@/components/GridWater";
export const Helping = () => {
  return (
    <div className="2xl:py-20 xl:py-16 py-10 container overflow-hidden flex flex-col lg:flex-row items-start justify-around gap-3 md:gap-5 lg:gap-8 relative">
      <div
        data-aos="fade-up"
        className="flex w-full lg:w-1/3 flex-col items-start justify-center gap-3"
      >
        <div className="flex flex-col gap-10 w-full">
          <div className="relative w-full">
            <p className="text-3xl lg:text-4xl font-bold text-white break-words">
              Made To Built for mass adoption.
            </p>
            <Underline></Underline>
          </div>

          <div className="flex flex-row items-start gap-1">
            {/* <div className="w-[5px] h-[5px] rounded-full bg-[#22CCEE] mt-0.5 mb-auto"></div> */}
            {/* <div className="font-mono text-primary-7 font-light uppercase text-xs tracking-wide">
              Live data
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <div
          data-aos="fade-up"
          className="grid-cols-1 grid md:grid-cols-2 lg:gap-10 gap-5"
        >
          {CardData.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-gradient-purple h-full px-3 p-3 lg:p-7 pb-5 lg:pb-6 xl:pb-3 ${
                  item.id == "1" && "mt-0 lg:mt-8 xl:mt-10 2xl:mt-14"
                } ${
                  item.id == "3" && "mt-0 lg:mt-8 xl:mt-10 2xl:mt-14"
                } rounded-lg`}
              >
                <CardTitle>
                  <TitleCard>{item.title}</TitleCard>
                  <Line color={item.color}></Line>
                </CardTitle>
                <p className="text-white text-lg font-normal mt-5">
                  {item.des}
                </p>
                {/* <div className="flex flex-row items-start gap-1 pt-5">
                  <div
                    className={`w-[5px] h-[5px] rounded-full mt-0.5 mb-auto`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className=" lg:text-2xl text-sm font-medium">
                    {item.number}
                    {index + 1 === CardData.length && "%"}
                  </span>
                </div>
                <p className="text-text-500 mt-2 text-xs">{item.footer}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
