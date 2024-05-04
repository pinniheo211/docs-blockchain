import bannerV1 from "@/assets/images/hackathon/bannerV1.png";
import bannerV2 from "@/assets/images/hackathon/bannerV2.png";
import bannerV3 from "@/assets/images/hackathon/bannerV3.png";
import Image from "next/image";
export const HackathonsVer = () => {
  const version = [
    {
      date: "SEPTEMBER 2021",
      title: "Now Blockchain Ignition",
      des: "With over 500+ project submissions from builders around the world.",
      img: bannerV1,
    },
    {
      date: "FEBRUARY 2023",
      title: "Now Blockchain Grizzlython",
      des: "Over 10,000 participants submitted 813 final projects to Grizzlython, the seventh Now Blockchain hackathon.",
      img: bannerV2,
    },
    {
      date: "JULY 2022",
      title: "Now Blockchain Summer Camp",
      des: "Open to teams globally, Now Blockchain Summer Camp saw nearly 18,000 participants submit 750 final projects to the judges.",
      img: bannerV3,
    },
  ];
  return (
    <div className="container text-center mt-20">
      <h1
        className="text-white font-semibold text-2xl xl:text-3xl 2xl:text-4xl"
        data-aos="fade-up"
      >
        Previous Hackathons
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {version.map((item, i) => {
          return (
            <div
              data-aos="zoom-in"
              key={i}
              className="bg-gradient-linear-purple rounded-[30px]"
            >
              <Image alt="image" src={item.img} width={700} height={700} />
              <div className="p-5 text-left">
                <p className="text-white font-mono text-[10px]">{item.date}</p>
                <h1 className="text-white text-2xl font-semibold">
                  {item.title}
                </h1>
                <p className="text-white text-base">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
