import { Youtube } from "@/assets/icon/Youtube";
import changelog from "@/assets/images/develop/changeLog.png";
import Image from "next/image";
import Link from "next/link";
import { TitleDevelop } from "../BannerDevelop/style";
import { CardChange } from "./style";
export const ChangeLog = () => {
  return (
    <div className="container mt-20">
      <div className="flex gap-5 sm:gap-7 xl:gap-[100px] max-w-[1000px] items-center lg:flex-row md:flex-row flex-col ">
        <div className="lg:w-3/4 w-full flex flex-col gap-3" data-aos="fade-up">
          <TitleDevelop>Now Blockchain Changelog</TitleDevelop>
          <p className="text-white mt-5">
            Some more Now Blockchain changes from Jonas & Jacob. Subscribe to
            the newsletter: https://Now Blockchain.com/newsletter Resources: -
            Feature activation schedule - https://github.com/NOW
            BLOCKCHAIN-labs/Now Blockchain/wiki/Feature-Gate-Activation-Schedule
            Commits: ...
          </p>
          <Link href="#">
            <button className="block mt-3 w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full">
              LATEST EPISODE
            </button>
          </Link>
        </div>
        <Image
          alt="Banner"
          src={changelog}
          data-aos="fade-up"
          className="w-1/3 sm:w-auto"
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[100px] md:gap-10 gap-10 mt-10">
        <CardChange data-aos="zoom-in">
          <p className="text-white text-xl md:text-2xl 2xl:text-3xl font-semibold">
            Now Blockchain Developer Update
          </p>
          <p className="text-white text-base mt-5 min-h-[100px]">
            Sign up to the newsletter and learn about new resources, new
            commits, new proposals, and more.
          </p>
          <form className="w-full mt-10">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                className="block w-full p-4 ps-10 text-sm text-white bg-[#08021C] rounded-full outline-none"
                placeholder="Enter email address"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-3 top-2/4 translate-y-[-50%] !bg-gradient-dark-pink rounded-full px-5 py-1.5"
              >
                Sign Up
              </button>
            </div>
          </form>
        </CardChange>
        <CardChange data-aos="zoom-in">
          <p className="text-white text-xl md:text-2xl 2xl:text-3xl font-semibold">
            Even more resources
          </p>
          <p className="text-white text-base mt-5 min-h-[100px]">
            More videos, more episodes. Discussions between industry leaders in
            both blockchain and technology, our team, and community developers.
          </p>
          <Link href="#">
            <div className="flex gap-4 pl-3 pr-1 py-1 mt-10 w-[200px] justify-between rounded-full border items-center">
              <p className="text-white">YOUTUBE</p>
              <p className="p-1  rounded-full w-[40px] bg-white">
                <Youtube />
              </p>
            </div>
          </Link>
        </CardChange>
      </div>
    </div>
  );
};
