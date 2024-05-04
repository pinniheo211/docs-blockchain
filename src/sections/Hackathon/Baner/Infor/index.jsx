import icon1 from "@/assets/images/hackathon/icon1.png";
import icon2 from "@/assets/images/hackathon/icon2.png";
import icon3 from "@/assets/images/hackathon/icon3.png";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Infor() {
  const Infors = [
    {
      amount: "48,000+",
      title: "Developers",
      img: icon1,
    },
    {
      amount: "3,000+",
      title: "Projects Launched",
      img: icon2,
    },
    {
      amount: "$600m+",
      title: "in Venture Funding",
      img: icon3,
    },
  ];
  return (
    <>
      <div className="container mx-auto w-full  justify-center lg:flex md:flex hidden">
        <div className="-translate-y-1/2 bg-dark flex flex-col w-full items-start max-w-5xl gap-3 sm:gap-5 p-5 sm:p-7 md:p-9 border-primary-7 shadow-sd-pink rounded-3xl">
          <div className="flex items-center justify-between gap-3 min-w-[300px] w-full">
            {Infors.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.img} alt="image" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-lg font-normal">
                      {item.amount}
                    </p>
                    <p className="text-white text-lg font-normal">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div div className="container mx-auto w-full flex justify-center">
        <div className="-translate-y-1/2 bg-dark flex flex-col w-full items-start max-w-5xl gap-3 sm:gap-5 p-5 sm:p-7 md:p-9 border-primary-7 shadow-sd-pink rounded-3xl md:hidden lg:hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper flex items-center justify-center gap-3 w-full"
          >
            {Infors.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={` px-5 text-center lg:w-[230px] mx-auto  ${
                    index !== 3 && "lg:border-r-[1px]"
                  }`}
                >
                  <div className="flex items-center gap-5 justify-center  ">
                    <Image src={item.img} alt="image" />
                    <div className="flex flex-col gap-3 items-start">
                      <p className="text-white text-lg font-normal text-left">
                        {item.amount}
                      </p>
                      <p className="text-white text-lg font-normal text-left">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
