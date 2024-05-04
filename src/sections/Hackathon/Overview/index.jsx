import frame from "@/assets/images/hackathon/Frame.png";
import Image from "next/image";
export const Overview = () => {
  return (
    <div className="container py-20 flex items-center lg:flex-row flex-col gap-10 justify-around relative z-10">
      <div className="w-1/3 lg:w-1/2">
        <Image
          src={frame}
          width={700}
          height={700}
          data-aos="fade-up"
          alt="image Overview"
        />
      </div>
      <div
        className="flex flex-col gap-10 lg:max-w-xl w-full lg:w-1/2"
        data-aos="fade-up"
      >
        <h1 className="text-white font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
          Overview
        </h1>
        <p className="text-primary-1 text-base">
          Now Blockchain hackathons are not traditional hackathons. They are
          global, online events where the most promising entrepreneurs and
          builders compete to launch their crypto startups to raise seed rounds
          from the world's leading investors. Do you have what it takes?
        </p>
        <button className="block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-7 md:py-3 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
          GET NOTIFIED
        </button>
      </div>
    </div>
  );
};
