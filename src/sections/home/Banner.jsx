/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BANNER_DUMMY } from "./helper";
import ArrowLeftIcon from "@/icons/Arrow/ArrowLeft";
import ArrowRightIcon from "@/icons/Arrow/ArrowRight";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel }, { allowReinits: true });
    };
    init();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="relative"
      id="carouselDarkVariant"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-2 md:mb-3 2xl:mb-5 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          className="mx-[3px] rounded-full box-content w-2 h-2 md:h-3 md:w-3 flex-initial cursor-pointer border-transparent hover:opacity-100 bg-gradient-dark-pink  p-0 -indent-[999px] opacity-50 transition-opacity duration-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-target="#carouselDarkVariant"
          data-te-slide-to="0"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className="mx-[3px] rounded-full box-content w-2 h-2 md:h-3 md:w-3 flex-initial cursor-pointer border-transparent hover:opacity-100 bg-gradient-dark-pink  p-0 -indent-[999px] opacity-50 transition-opacity duration-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-target="#carouselDarkVariant"
          data-te-slide-to="1"
          data-te-carousel-active
          aria-label="Slide 2"
        ></button>
        <button
          className="mx-[3px] rounded-full box-content w-2 h-2 md:h-3 md:w-3 flex-initial cursor-pointer border-transparent hover:opacity-100 bg-gradient-dark-pink  p-0 -indent-[999px] opacity-50 transition-opacity duration-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-target="#carouselDarkVariant"
          data-te-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="relative w-full 2xl:max-h-[82vh] flex items-center overflow-hidden after:clear-both after:block after:content-['']">
        {BANNER_DUMMY.map((banner, index) => (
          <div
            key={index}
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active={index === 0 ? true : undefined}
            className={
              index === 0
                ? "relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[500ms] ease-in-out motion-reduce:transition-none"
                : "hidden relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[500ms] ease-in-out motion-reduce:transition-none"
            }
          >
            <div className="absolute w-full h-full  flex items-end sm:items-center justify-start pb-9 sm:pb-0">
              <div className="sm:container w-full flex flex-col sm:flex-row items-center justify-between">
                <div className="flex flex-col gap-1 md:gap-5 2xl:gap-8 items-center sm:items-start justify-center sm:justify-start w-full sm:w-1/2">
                  <p
                    style={{ whiteSpace: "pre-line" }}
                    className="text-center text-3xl sm:text-left sm:text-2xl lg:text-4xl xl:text-4xl 2xl:text-6xl !leading-tight 2xl:leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-7 via-primary-8 to-primary-4"
                  >
                    {banner?.title}
                  </p>
                  <p className="text-center sm:text-left text-sm md:text-base lg:text-lg pb-1 xl:pb-3 2xl:pb-0 xl:text-xl 2xl:text-2xl text-white font-medium">
                    {banner?.des}
                  </p>
                  <div className="flex items-center justify-start gap-8">
                    <Link
                      href={{
                        pathname: "/",
                      }}
                      passHref
                    >
                      <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                        {" "}
                        {banner?.button1}
                      </button>
                    </Link>
                    <Link
                      href={{
                        pathname: "/",
                      }}
                      passHref
                    >
                      <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
                        {" "}
                        {banner?.button2}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:w-1/2">
                  <Image src={banner?.img} alt={`Banner ${index}`} />
                </div>
              </div>
            </div>
            <Image
              width={2680}
              className="-z-10 min-h-[650px] sm:min-h-[300px]"
              height={1150}
              src={banner?.bg}
              alt={`Banner ${index}`}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 border-transparent left-2 top-0 z-[1] w-[10%] sm:w-[3%] 2xl:w-[7%] flex items-center justify-center border-0 bg-none p-0 text-center text-black transition-all duration-300"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
      >
        <span className="block sm:hidden lg:block h-8 w-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-white hover:bg-gradient-button bg-gradient-dark-pink  p-2 rounded-full">
          <ArrowLeftIcon />
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 border-transparent right-2 top-0 z-[1] w-[10%] sm:w-[3%] 2xl:w-[7%] flex items-center justify-center border-0 bg-none p-0 text-center text-black transition-all duration-300"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
      >
        <span className="block sm:hidden lg:block h-8 w-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-white hover:bg-gradient-button bg-gradient-dark-pink  p-2 rounded-full">
          <ArrowRightIcon />
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Banner;
