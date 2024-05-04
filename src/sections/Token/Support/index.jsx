import Image from "next/image";
import { supportExtend } from "./helper";

export const Support = () => {
  return (
    <div className="-mt-10 md:mt-0 text-center container pb-10">
      <div className="flex justify-center w-full">
        <p
          className=" text-3xl sm:text-4xl md:text-5xl md:max-w-xl lg:text-center md:text-center text-left lg:max-w-4xl font-bold text-white "
          data-aos="fade-up"
        >
          Get native support for enterprise features — without third party
          tooling.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 xl:gap-28 mt-10">
        {supportExtend?.map((support, i) => {
          return (
            <div
              className={`flex items-center flex-col gap-20 justify-around ${
                support.id % 2 == 0 ? "lg:flex-row-reverse " : " lg:flex-row"
              }`}
              key={i}
              data-aos="fade-up"
            >
              <div className="lg:w-2/5 w-full text-left max-w-xl">
                <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-10">
                  {support.title}
                </h3>
                <p className="text-primary-1">{support.des}</p>
              </div>
              <Image src={support.img} alt="" width={250} height={250} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
