import Image from "next/image";
import imgBanner from "@/assets/images/token/bannerToken.png";

export const BannerToken = () => {
  return (
    <div
      className="banner-home  w-full min-h-[500px] py-5 lg:py-[50px] sm:bg-full lg:bg-cover bg-no-repeat relative flex items-center gap-5 justify-between"
      style={{
        backgroundImage: `url(../../assets/images/bannerHack.png)`,
      }}
    >
      <div className="lg:pl-40 md:pl-20 pl-5 pr-10">
        <div className="max-w-xl ">
          <h1 className="lg:text-lg md:text-sm text-base  font-bold text-white text-left ">
            Token Extensions
          </h1>
          <p className="text-white lg:text-5xl md:text-4xl text-3xl font-semibold">
            Permissioned tokens on a permissionless network
          </p>
          <p className="text-white lg:text-lg md:text-sm text-base mt-20 font-semibold">
            Built in collaboration with large institutions, token extensions
            unlock rich native functionality designed for complex behaviors,
            without compromising on security or scalability. Get started today.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col lg:gap-[100px] gap-10 mt-20">
          <button className="bg-gradient-dark-pink w-[200px] text-white px-3 py-1.5 rounded-full">
            START BUILDING
          </button>
          <button className="border w-[200px] text-white px-3 py-1.5 rounded-full">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <Image
        className="xl:block hidden"
        width={500}
        height={500}
        src={imgBanner}
        alt="img"
      ></Image>
    </div>
  );
};
