import Image from "next/image";
export const Banner = ({ content, type }) => {
  return (
    <div
      className="banner-home w-full pt-20 pb-44 sm:pt-32 sm:pb-56 sm:bg-full lg:bg-cover  bg-no-repeat relative"
      style={{
        backgroundImage: `url(../../assets/images/bannerHack.png)`,
      }}
    >
      <div className=" container mx-auto w-full flex lg:flex-row md:flex-row flex-col items-center justify-around gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-7">
          <p
            style={{ whiteSpace: "pre-line" }}
            className="text-[42px] xl:text-6xl 2xl:text-7xl font-bold text-white text-left leading-tight sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug"
          >
            {content?.title && content?.title}
            {content?.title1 && content?.title1}
            {type === "GAMING" && <br />}
            {content?.title2 && content?.title2}
          </p>
          <p className="text-white text-lg font-medium max-w-2xl">
            {content?.des && content?.des}
          </p>
          {content?.button1 && (
            <div className="flex gap-3 items-center">
              <button className="block my-4 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                {content?.button1 && content?.button1}
              </button>
              <button className="block my-4 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
                {content?.button2 && content?.button2}
              </button>
            </div>
          )}
        </div>
        <div className="w-auto sm:w-1/3 xl:w-1/2 flex items-center justify-center">
          {content?.img && (
            <Image
              alt="Banner"
              className="lg:block md:block hidden"
              src={content?.img}
            />
          )}
        </div>
      </div>
    </div>
  );
};
