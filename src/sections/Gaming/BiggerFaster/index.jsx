import { CardData } from "@/sections/home/Helping/helper";
import { CardTitle, Line, TitleCard } from "./style";
export const BiggerFaster = () => {
  return (
    <div className="-mt-16 sm:-mt-0 pb-0 md:pb-16 container overflow-hidden flex flex-col lg:flex-row items-start justify-around gap-3 md:gap-5 lg:gap-8 relative">
      <div
        data-aos="fade-up"
        className="flex w-full lg:w-1/3 sm:mt-10 flex-col items-start justify-center gap-3"
      >
        <div className="flex flex-col gap-10 w-full">
          <div className="relative w-full">
            <p className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white text-left leading-tight">
              Go bigger, faster, smarter.
            </p>
          </div>

          <div className="flex flex-row items-start gap-1">
            <div className="w-[5px] h-[5px] rounded-full bg-[#22CCEE] mt-0.5 mb-auto"></div>
            <div className="font-mono text-primary-7 font-light uppercase text-xs tracking-wide">
              WHY Now Blockchain ?
            </div>
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
                className={`bg-gradient-purple h-full px-3 p-3 lg:p-8 pb-5  ${
                  item.id == "1" && "lg:mt-14"
                } ${item.id == "3" && "lg:mt-14"}  rounded-lg `}
              >
                <CardTitle>
                  <TitleCard>{item.title}</TitleCard>
                  <Line color={item.color}></Line>
                </CardTitle>
                <p className="text-white text-lg font-normal mt-5">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
