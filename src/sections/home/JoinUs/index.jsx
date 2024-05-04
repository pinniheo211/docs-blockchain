import Image from "next/image";
import { CARD_DUMMY } from "../OurClients/helper";
import ArrowRightIcon from "@/icons/Arrow/ArrowRight";
import { Title } from "../style";
import { BuildMenu } from "../helper";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <div className="2xl:pt-20 xl:pt-16 pt-10 2xl:pb-10 xl:pb-6 pb-4 container">
      <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-5 md:gap-5 lg:gap-8 ">
        <div>
          <Title>Build for growth</Title>
        </div>
        <div className="w-full lg:w-2/4 md:w-3/4 overflow-x-scroll scroll-bar">
          <ul className="flex gap-3 sm:gap-5 justify-start">
            {BuildMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="border-[1px] px-3 sm:px-4 py-1 rounded-full hover:bg-gradient-dark-pink cursor-pointer"
                >
                  <Link href={item.url}>
                    <span className="text-white text-sm sm:text-lg font-medium ">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
