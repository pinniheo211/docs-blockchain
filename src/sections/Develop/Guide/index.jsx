import { TitleDevelop } from "../BannerDevelop/style";

export const Guide = () => {
  return (
    <div className="container mt-20">
      <TitleDevelop data-aos="fade-in">Tutorials and guides.</TitleDevelop>
      <p className="text-primary-1 mt-3 text-lg md:text-xl">
        Learn from tutorials and guides from across the greater Now Blockchain
        ecosystem.
      </p>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {Guides.map((item, index) => {
          return (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-7 xl:p-8 2xl:p-10 rounded-xl bg-[#19161c] flex flex-col gap-3 md:gap-4 xl:gap-5 2xl:gap-7 cursor-pointer hover:!-translate-y-1 z-10 transition-all duration-300"
              data-aos="zoom-in"
            >
              <p className="text-pink text-3xl font-semibold">{item.type}</p>
              <p className="text-primary-1 text-base sm:text-lg md:text-xl">
                {item.des1}
              </p>
              <p className="text-primary-1 text-base sm:text-lg md:text-xl">
                {item.des2}
              </p>
              <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
                LEARN MORE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Guides = [
  {
    type: "BEGINNER",
    des1: "Getting Started with Token Extensions",
    des2: "With the new token extensions, you can create custom logic for your tokens. In this guide we will go over everything you need to know about token extensions and what you need to get started building today",
    link: "#",
    button: "LEARN MORE",
  },
  {
    type: "INTRO",
    des1: "Intro to Now Blockchain development (using only your browser)",
    des2: "Now Blockchain developer quickstart guide to learn how to setup, build, and deploy your first Now Blockchain program using only your browser with Now Blockchain Playground.",
    link: "#",
    button: "LEARN MORE",
  },
  {
    type: "INTRO",
    des1: "Install the Now Blockchain CLI for local development",
    des2: "Quickstart guide on how to install the Now Blockchain CLI and setup your local Now Blockchain development environment on Linux, Mac or Windows.",
    link: "#",
    button: "LEARN MORE",
  },
];
