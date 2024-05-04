import bgBanner from "@/assets/images/bannerSuperFast.png";
export const SuperFast = () => {
  return (
    <div
      className="mt-10 sm:mt-20 w-full py-10 sm:py-36 sm:bg-full lg:bg-cover  bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgBanner.src})`,
      }}
    >
      <div className="container mx-auto w-full flex lg:flex-row md:flex-row flex-col items-center justify-around gap-4">
        <div className="w-1/2"></div>

        <div className="w-full md:w-1/2 flex flex-col gap-7">
          <div className="font-mono text-primary-7 font-light uppercase text-xs tracking-wide">
            Now Blockchain IN ACTION
          </div>

          <p className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white text-left leading-tight">
            Super Fast. Super cheap. Super seamless.
          </p>
          <p className="text-white text-lg max-w-2xl">
            Now blockchain's blazing-fast speed and ultra-low fees are built to
            scale, so the ecosystem grows without sacrificing censorship
            resistance or security. It’s so fast, your players will definitely
            notice. See how Mini Royale: Nations uses the blockchain to create a
            unique open-economy multiplayer shooter.
          </p>
          <div className="flex gap-3 items-center">
            <button className="block my-4 sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
