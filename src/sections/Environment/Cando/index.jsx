import { ArrowDown } from "@/assets/icon/ArrowDown";
import Link from "next/link";
import isolation1 from "@/assets/images/environ/isolation1.png";
import isolation2 from "@/assets/images/environ/isolation2.png";
import isolation3 from "@/assets/images/environ/isolation3.png";
import Image from "next/image";
export const Cando = () => {
  return (
    <div className="container w-full text-center mt-24 md:mt-36 xl:mt-40 2xl:mt-44">
      <h1 className="text-4xl 2xl:text-5xl font-semibold text-white">
        What you can do
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 xl:gap-7 2xl:gap-10 mt-5 xl:mt-8 2xl:mt-10">
        {step.map((step, index) => {
          return (
            <div
              key={index}
              className={`p-4 md:p-5 xl:p-7 2xl:p-10 bg-gradient-card-purple rounded-xl ${
                index !== 2 ? "" : "md:col-span-2 lg:col-span-1"
              }`}
              data-aos="fade-up"
            >
              <div className="w-full flex items-center justify-between gap-3">
                <p className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white">
                  {step?.title}
                </p>
                <Link href={step.link}>
                  <p className="text-white translate-x-1 transition-all duration-300 w-[20px] h-[20px] -rotate-90 ">
                    <ArrowDown />
                  </p>
                </Link>
              </div>
              <p className="text-left text-primary-1 mt-10 text-lg">
                {step.des}
              </p>
              <div className="mt-10 w-full flex justify-center">
                <Image src={step.img} alt="Banner" className="w-1/3 lg:w-1/2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const step = [
  {
    img: isolation1,
    des: "We’ve open-sourced the To Earn Now’s emissions data for those who want to check our work or use it for other analyses. Read the energy use report for more information.",
    link: "#",
    title: "Use the data",
  },
  {
    img: isolation2,
    des: "The NOW BLOCKCHAIN Foundation encourages all validators and projects to take a look at their own emissions data and mitigate where possible. Learn from Orca's journey.",
    link: "#",
    title: "Lighten your footprint",
  },
  {
    img: isolation3,
    des: "We’ve open-sourced the NOW BLOCKCHAIN’semissions data for those who want to check our work or use it for other analyses. Read the energy use report for more information.",
    link: "#",
    title: "Apply for a grant",
  },
];
