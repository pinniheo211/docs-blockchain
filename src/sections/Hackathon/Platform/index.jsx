import platform1 from "@/assets/images/hackathon/platform1.png";
import platform2 from "@/assets/images/hackathon/platform2.png";
import platform3 from "@/assets/images/hackathon/platform3.png";
import platform4 from "@/assets/images/hackathon/platform4.png";
import platform5 from "@/assets/images/hackathon/platform5.png";
import platform6 from "@/assets/images/hackathon/platform6.png";
import platform7 from "@/assets/images/hackathon/platform7.png";
import platform8 from "@/assets/images/hackathon/platform8.png";
import Image from "next/image";
export const Platform = () => {
  const platforms = [
    {
      img: platform1,
      url: "#",
    },
    {
      img: platform2,
      url: "#",
    },
    {
      img: platform3,
      url: "#",
    },
    {
      img: platform4,
      url: "#",
    },
    {
      img: platform5,
      url: "#",
    },
    {
      img: platform6,
      url: "#",
    },
    {
      img: platform7,
      url: "#",
    },
    {
      img: platform8,
      url: "#",
    },
  ];
  return (
    <div className="container text-center py-10 ">
      <h1
        className="text-white font-semibold text-2xl xl:text-3xl 2xl:text-4xl"
        data-aos="fade-up"
      >
        Previous Sponsors
      </h1>
      <div className="mt-10 flex gap-5 items-center overflow-x-scroll ">
        {platforms.map((item, index) => {
          return <Image key={index} src={item.img} width={150} height={150} />;
        })}
      </div>
    </div>
  );
};
