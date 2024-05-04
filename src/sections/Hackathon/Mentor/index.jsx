import logo1 from "@/assets/images/hackathon/logo1.png";
import logo10 from "@/assets/images/hackathon/logo10.png";
import logo11 from "@/assets/images/hackathon/logo11.png";
import logo12 from "@/assets/images/hackathon/logo12.png";
import logo13 from "@/assets/images/hackathon/logo13.png";
import logo14 from "@/assets/images/hackathon/logo14.png";
import logo15 from "@/assets/images/hackathon/logo15.png";
import logo16 from "@/assets/images/hackathon/logo16.png";
import logo2 from "@/assets/images/hackathon/logo2.png";
import logo3 from "@/assets/images/hackathon/logo3.png";
import logo4 from "@/assets/images/hackathon/logo4.png";
import logo5 from "@/assets/images/hackathon/logo5.png";
import logo6 from "@/assets/images/hackathon/logo6.png";
import logo7 from "@/assets/images/hackathon/logo7.png";
import logo8 from "@/assets/images/hackathon/logo8.png";
import logo9 from "@/assets/images/hackathon/logo9.png";
import { Background } from "@/sections/AboutBlockchain/ContetLeft/style";
import Image from "next/image";
export const Mentor = () => {
  const mentors = [
    {
      logo: logo1,
      url: "#",
    },
    {
      logo: logo2,
      url: "#",
    },
    {
      logo: logo3,
      url: "#",
    },
    {
      logo: logo4,
      url: "#",
    },
    {
      logo: logo5,
      url: "#",
    },
    {
      logo: logo6,
      url: "#",
    },
    {
      logo: logo7,
      url: "#",
    },

    {
      logo: logo8,
      url: "#",
    },
    {
      logo: logo9,
      url: "#",
    },
    {
      logo: logo10,
      url: "#",
    },
    {
      logo: logo11,
      url: "#",
    },
    {
      logo: logo12,
      url: "#",
    },
    {
      logo: logo13,
      url: "#",
    },
    {
      logo: logo14,
      url: "#",
    },

    {
      logo: logo15,
      url: "#",
    },
    {
      logo: logo16,
      url: "#",
    },
  ];
  return (
    <div className="container z-20 relative text-center py-20">
      <h1
        className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold"
        data-aos="fade-up"
      >
        Previous Winners, Honorable Mentions, and Participants
      </h1>
      <div
        className=" mt-10 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10"
        data-aos="fade-up"
      >
        {mentors.map((mentor, index) => {
          return (
            <div
              key={index}
              className="h-[150px] rounded-xl bg-dark flex justify-center items-center"
            >
              <Image src={mentor.logo} alt="logo" width={100} height={100} />
            </div>
          );
        })}
      </div>
      <Background />
    </div>
  );
};
