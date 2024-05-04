import imgBanner from "@/assets/images/bannerEnviron.png";
import Image from "next/image";
export const BannerInvironment = () => {
  return (
    <div
      className="banner-home  w-full h-[500px] py-[100px] sm:bg-full lg:bg-cover  bg-no-repeat relative"
      style={{
        backgroundImage: `url(../../assets/images/bannerHack.png)`,
      }}
    >
      <div className="absolute w-full top-2/4 px-[30px]  translate-y-[-50%] flex lg:flex-row md:flex-row flex-col items-center justify-around ">
        <div className="lg:w-[500px] w-full">
          <h1 className="text-6xl font-bold text-white text-left ">
            Carbon neutral. Climate focused.
          </h1>
          <p className="text-white">
            How the Now Blockchain Foundation and greater community are building
            a better, more energy-efficient web3.
          </p>
        </div>
        <Image
          alt="Banner"
          className="lg:block md:block hidden"
          src={imgBanner}
        />
      </div>
    </div>
  );
};
