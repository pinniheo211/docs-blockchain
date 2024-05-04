import ArrowRightIcon from "@/icons/Arrow/ArrowRight";
import { PATHS } from "@/routes";
import Image from "next/image";
import Link from "next/link";

export const GetADemo = () => {
  return (
    <div className="bg-gradient-get-a-demo">
      <div className="pb-10 md:pb-16 container flex items-center gap-8 flex-col">
        <p className="max-w-[1000px] text-white md:text-4xl text-center text-2xl font-extrabold mx-auto">
          Don’t Wait! Join thousands of validators, creators, artists, and
          developers using NOW Blockchain.
        </p>
        <Link href={PATHS.REGISTER}>
          <span className="block sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-7 py-3 md:px-9 md:py-4 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
            JOIN NOW
          </span>
        </Link>
      </div>
    </div>
  );
};
