import Image from "next/image";
import { Title } from "../style";
import Link from "next/link";
import Helium1 from "@/assets/images/home/banner-helium1_1.png";
import { CaseStudy } from "./helper";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const DifferentMethods = () => {
  return (
    <div className="py-10 xl:py-16 2xl:py-20 container flex flex-col  items-center gap-3 md:gap-8">
      <div
        data-aos="fade-up"
        className="flex flex-col items-start justify-start gap-3 md:gap-8 w-full "
      >
        <div className="flex items-start md:flex-row lg:flex-row flex-col gap-3 justify-between w-full pb-5 md:pb-0">
          <Title>Designed for real world use.</Title>
        </div>
        <div
          style={{ backgroundImage: `url(${Helium1.src})` }}
          className="w-full bg-cover bg-center bg-no-repeat py-14 lg:py-16 xl:py-24 2xl:py-32 rounded-3xl bg-gradient-helping flex items-center justify-around shadow-lg"
        >
          <div className="flex w-4/5 xl:w-3/4 flex-col items-start justify-center gap-3 md:gap-5 xl:gap-7">
            {/* <button className="block my-1 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-7 md:py-3 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
              CASE STUDY
            </button> */}
            <p className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white break-words">
              BUILD IT YOUR WAY
            </p>
            <p className="text-xl lg:text-2xl font-medium text-white max-w-[800px]">
              NOW BLOCKCHAIN has the advanced tooling you need to accelerate
              from idea to launch.
            </p>
          </div>
          <div className="w-auto"></div>
        </div>
      </div>
      <div className=" hidden lg:grid lg:grid-cols-3 lg:gap-10 gap-3">
        {CaseStudy.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item?.img.src})` }}
              className="w-full bg-cover bg-center bg-no-repeat py-5 xl:py-7 2xl:py-9 rounded-3xl bg-gradient-helping flex items-start justify-around shadow-lg"
            >
              <div className="flex w-3/4 flex-col items-start justify-center gap-4">
                {/* <button className="block my-2 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                  {item?.category}
                </button> */}
                <p className="text-lg xl:text-xl 2xl:text-2xl font-bold text-white break-words">
                  {item?.title}
                </p>
                <p className="text-base xl:text-lg 2xl:text-xl font-normal text-white max-w-[800px]">
                  {item?.content}
                </p>
              </div>
              <div className="w-auto"></div>
            </div>
          );
        })}
      </div>
      <div className="lg:hidden block container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {CaseStudy.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-[300px]">
                <div
                  style={{ backgroundImage: `url(${item?.img.src})` }}
                  className="w-full bg-cover bg-center bg-no-repeat py-5 rounded-3xl bg-gradient-helping flex items-start justify-around shadow-lg"
                >
                  <div className="flex w-3/4 flex-col items-start justify-center gap-2 sm:gap-4">
                    {/* <button className="block my-1 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                      {item?.category}
                    </button> */}
                    <p className="text-lg xl:text-xl 2xl:text-2xl font-bold text-white break-words">
                      {item?.title}
                    </p>
                    <p className="text-base xl:text-lg 2xl:text-xl font-normal text-white max-w-[800px]">
                      {item?.content}
                    </p>
                  </div>
                  <div className="w-auto"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
