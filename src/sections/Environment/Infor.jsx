import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export const InforEnvironment = () => {
  return (
    <>
      <div className="absolute z-10 p-8 rounded-xl md:hidden left-2/4 translate-x-[-50%] top-[-100px] lg:flex  hidden border-primary-7 shadow-sd-pink ">
        {infors.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-5 text-center w-[230px] ${
                index !== 3 &&
                "border-[rgba(255, 255, 255, 0.1)] border-r-[1px]"
              }`}
            >
              <div className="flex flex-col gap-5">
                <p className="text-[#F40074] font-bold text-5xl">
                  {item.amount}
                </p>
                <p className="text-white">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="translate-y-[80px]">
        <button className=" hidden lg:block mx-auto mt-3 lg:mt-5 2xl:mt-7 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
          SEE RAW DATA
        </button>
      </div>
      <div className="container">
        <div className="z-10 w-full h-full rounded-xl -translate-y-1/2 lg:hidden cursor-grabbing">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
            }}
          >
            {infors.map((item, index) => {
              return (
                <SwiperSlide key={index} className="container">
                  <div className="flex flex-col gap-5 text-center justify-center my-5 min-h-[150px] rounded-xl border-primary-7 shadow-sd-pink">
                    <p className="text-[#F40074] font-bold text-5xl">
                      {item.amount}
                    </p>
                    <p className="text-white">{item.des}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className="block mx-auto mt-3 lg:mt-5 2xl:mt-7 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
            SEE RAW DATA
          </button>
        </div>
      </div>
    </>
  );
};

export const infors = [
  {
    amount: 636,
    des: "Average energy used per To Earn Now transacton, in Joules",
  },
  {
    amount: 6674,
    des: "Average energy used per To Earn Now nonvoting transaction, in Joules",
  },
  {
    amount: 9160,
    des: "Annual carbon footprint, in tons of CO2",
  },
  {
    amount: 10,
    des: "Net carbon impact",
  },
];
