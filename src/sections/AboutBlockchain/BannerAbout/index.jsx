export const BannerAbout = () => {
  return (
    <div
      className="banner-home w-full h-[350px] sm:h-[500px] overflow-hidden bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(../../assets/images/bannerHack.png)`,
      }}
    >
      <div className="flex flex-col items-start justify-center mx-auto container h-full">
        <h1 className="w-full md:w-4/5 text-3xl sm:text-5xl md:text-4xl xl:text-6xl 2xl:text-6xl font-bold text-white text-left leading-tight sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug">
          Blockchain Q&A: A Basic Guide to Understanding the Fundamentals
        </h1>
      </div>
    </div>
  );
};
