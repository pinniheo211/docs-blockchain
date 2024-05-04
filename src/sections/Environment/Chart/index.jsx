import chart from "@/assets/images/environ/chart.png";
import Image from "next/image";
export const Chart = () => {
  return (
    <div className="container lg:mt-48 flex flex-col justify-center items-center w-full gap-20">
      <div
        className="flex flex-col justify-center items-center relative"
        data-aos="fade-up"
      >
        <h1 className="text-white text-4xl 2xl:text-4xl font-semibold">
          {" "}
          How Now blockchain's energy use stacks up
        </h1>
        <h3 className="text-primary-1 text-xl font-normal mt-3">
          Compare Now blockchain's extremely efficient platform.
        </h3>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h3 className="text-white text-xl font-normal mb-10">
          One Now Blockchain (voting + non-voting) transaction [0.636kJ]
        </h3>
        <Image src={chart} className="w-full sm:w-2/3" alt="hmm" />
        <button className="block mx-auto mt-3 lg:mt-5 2xl:mt-7 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
          READ THE ENERGY USE REPORT
        </button>
      </div>
    </div>
  );
};
