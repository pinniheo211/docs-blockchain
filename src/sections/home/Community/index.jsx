import { Title } from "../style";
import img1 from "@/assets/images/home/img1.png";
import img2 from "@/assets/images/home/img2.png";
import img3 from "@/assets/images/home/img3.png";
import img4 from "@/assets/images/home/img4.png";
import img5 from "@/assets/images/home/img5.png";
import img6 from "@/assets/images/home/img6.png";
import img7 from "@/assets/images/home/img7.png";
import img8 from "@/assets/images/home/img8.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
export const Community = () => {
  return (
    <div className="container w-full text-center py-10">
      <Title>Join a thriving community.</Title>
      <div className="bg-gradient-transparent-purple px-5 py-10 cursor-grabbing mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <Image src={img1} alt="Banner1" className="w-full h-full" />
              <Image src={img3} alt="Banner2" className="w-full h-full" />
              <Image src={img2} alt="Banner3" className="w-full h-full" />
              <Image src={img4} alt="Banner4" className="w-full h-full" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <Image src={img8} alt="Banner5" className="w-full h-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-white text-3xl font-semibold mt-10 w-2/4 ">
          It's time to join the thousands of creators, artists, and developers
          using Now Blockchain.
        </p>
        <button className="rounded-full px-3 py-1.5 w-[150px] mt-10 bg-gradient-dark-pink text-white hover:-translate-y-1 transition-all duration-300">
          START BUILDING
        </button>
      </div>
    </div>
  );
};
