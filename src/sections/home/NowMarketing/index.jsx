import ArrowRightIcon from "@/icons/Arrow/ArrowRight";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imgBuild from "@/assets/images/home/build.png";
import shopify from "@/assets/images/home/shopify.png";
import { ListBuild } from "../ListBuild";
import { BuildMenu } from "../helper";
import { Title } from "../style";
import Link from "next/link";
import { useState } from "react";
import { ListBuilder } from "./helper";
import { PATHS } from "@/routes";
export const NowMarketingSection = () => {
  const [card, setCard] = useState(1);
  return (
    <div className="py-10 md:py-16 !pt-0 container flex items-center sm:gap-8 gap-4 flex-col">
      <div className="flex w-full flex-col lg:flex-row sm:items-start  lg:items-center min-h-max justify-between gap-5 md:gap-5 lg:gap-8 ">
        <div>
          <Title>Build for growth</Title>
        </div>
        <div className=" overflow-x-scroll scroll-bar">
          <ul className="flex gap-3 sm:gap-5 justify-start">
            {BuildMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`border-[1px] px-3 sm:px-4 py-1 rounded-full hover:bg-gradient-dark-pink  ${
                    card === index + 1 ? "bg-gradient-dark-pink" : ""
                  } cursor-pointer`}
                >
                  <button
                    onClick={() => setCard(item.id)}
                    className="text-white text-sm sm:text-lg font-medium "
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {ListBuilder?.map((item, index) => {
        return (
          <div key={index}>
            {item?.id === card && (
              <div
                data-aos="fade-up"
                className="w-full h-full bg-gradient-transparent-purple rounded-xl flex items-center justify-around md:flex-row lg:flex-row flex-col gap-5 sm:gap-10 2xl:gap-20 md:px-10 px-1 lg:px-10 py-5 z-10"
              >
                <div className="flex justify-center w-1/3 md:w-1/3 lg:w-auto">
                  <Image
                    src={item?.img}
                    alt="img"
                    width={500}
                    height={500}
                    className="ml-auto w-56 sm:w-auto"
                  />
                </div>
                <div className="w-full md:w-2/3 lg:w-auto flex flex-col items-center md:items-start gap-5 2xl:gap-7 justify-between max-w-[800px]">
                  <p className="text-white text-lg md:text-2xl xl:text-3xl md:px-0 px-3 md:text-left sm:text-center text-left">
                    {item?.content}
                  </p>
                  <Link href={item.url}>
                    <span className="block w-max cursor-pointer relative font-bold duration-300 text-white px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
