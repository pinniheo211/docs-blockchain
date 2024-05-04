import Image from "next/image";
import { DATA_TOP_GAME_DUMMY } from "./helper";

export const TopGame = () => {
  return (
    <div className="py-10 sm:py-24 container mx-auto w-full flex flex-col items-start justify-around gap-10 sm:gap-20">
      <p className="text-5xl md:text-5xl font-bold text-white text-left leading-tight">
        Top games from the community
      </p>

      <div className="w-full flex flex-col gap-10 sm:gap-20">
        {DATA_TOP_GAME_DUMMY.map((item, index) => (
          <div
            key={item?.id}
            className={`${
              index % 2 === 0
                ? "flex-col sm:flex-row"
                : "flex-col sm:flex-row-reverse"
            } flex items-center justify-between gap-5 sm:gap-16`}
          >
            <div
              className={`w-full sm:w-1/2 flex items-start justify-start flex-col gap-4`}
            >
              <p className="text-4xl md:text-5xl font-bold text-white text-left leading-tight">
                {item?.title}
              </p>
              <p className="text-white text-lg max-w-xl">{item?.des}</p>
            </div>
            <div className="w-full sm:w-1/2">
              <Image className="" src={item?.img} alt="banner super fast" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
