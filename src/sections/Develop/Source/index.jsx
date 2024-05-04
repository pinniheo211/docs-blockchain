import Link from "next/link";
import { TitleDevelop } from "../BannerDevelop/style";

export const Source = () => {
  return (
    <div className="container mt-20">
      <TitleDevelop>Go to the source.</TitleDevelop>
      <p className="text-primary-1 mt-3">
        Read the documentation for Now Blockchain and popular tools.
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-10 mt-3">
        {sources.map((item, index) => {
          return (
            <div
              key={index}
              data-aos={`${index != 0 ? "fade-left" : "fade-right"}`}
            >
              <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center items-start gap-3 border-b-2 pb-3">
                <h1 className="text-white text-2xl font-semibold">
                  {item.title}
                </h1>

                <Link href={item.link}>
                  <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
                    VIEW ALL
                  </button>
                </Link>
              </div>
              <p className="text-white font-semibold mt-10">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const sources = [
  {
    title: "Now Blockchain Docs",
    link: "#",
    des: "Learn how Now Blockchain works and get a high-level understanding of Now Blockchain's architecture.",
  },
  {
    title: "Metaplex Docs",
    link: "#",
    des: "Learn what you build with Metaplex, make the process of creating and launching NFTs easier.",
  },
];
