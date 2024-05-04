import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { news } from "./helper";
export const ManageNow = () => {
  // <div data-aos="fade-up" className="item w-[300px]">
  return (
    <div className="2xl:py-20 xl:py-16 py-10 container">
      {/* <p className="md:text-base text-md text-center pb-10 font-semibold mx-auto w-full text-[#64A9F2]">
        POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
      </p> */}

      <div className="w-full relative block">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          navigation={true}
          className="mySwiper"
        >
          {news?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-gradient-purple relative overflow-hidden rounded-xl shadow-lg 2xl:py-8 2xl:px-20 xl:py-6 xl:px-10 lg:py-4 lg:px-8 px-4 py-6 w-full">
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-purple px-5 py-3 drop-shadow-2xl">
                    <span className="text-pink text-lg sm:text-xl font-semibold">
                      NEWS
                    </span>
                  </div>
                  <div className="flex items-center lg:flex-row md:flex-row flex-col justify-around gap-5 py-3">
                    <div className="flex justify-center w-1/3 md:w-1/3 lg:w-auto">
                      <Image
                        src={item.img}
                        width={320}
                        height={300}
                        alt={`Mamage now 1`}
                      />
                    </div>
                    <div className="w-full md:w-2/3 lg:w-auto flex flex-col items-center gap-4 lg:gap-7 justify-between max-w-[800px]">
                      <p className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-semibold text-center text-white">
                        {item.title}
                      </p>
                      <p className="text-lg sm:text-xl font-normal text-center text-white">
                        {item.des}
                      </p>
                      <button className="block my-3 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-7 md:py-3 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
