import Image from "next/image";
import icon1 from "@/assets/icon/iconPlatform.png";
import icon2 from "@/assets/icon/iconPlatform2.png";
import icon3 from "@/assets/icon/iconPlatform3.png";
import icon4 from "@/assets/icon/iconPlatform4.png";
import icon5 from "@/assets/icon/iconPlatform5.png";
import Link from "next/link";
export const ContentRight = () => {
  return (
    <div className="">
      <h1 className="text-white text-3xl font-semibold">
        Explore Wallet Projects on Now Blockchain
      </h1>
      <div className="mt-10  flex flex-col lg:gap-[130px] md:gap-[130px] gap-[50px] ">
        {platforms.map((item, i) => {
          return (
            <div className="flex flex-col gap-5" key={i}>
              <Image src={item.icon} alt="icon" width={70} height={70} />
              <p className="text-white font-semibold text-3xl">{item.title}</p>
              <p className="text-white">{item.content}</p>
              <Link href={item.link}>
                <p className="text-white border rounded-full w-[200px] text-center px-5 py-1.5 hover:bg-gradient-pink">
                  Learn More
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const platforms = [
  {
    icon: icon1,
    title: "OKX",
    content:
      "OKX, one of the world's leading crypto exchanges, listed SOL on September 30th, 2020.",
    link: "#",
  },
  {
    icon: icon2,
    title: "Plantom",
    content:
      "Phantom is a digital wallet tailored for Now Blockchain and Ethereum.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Trust Wallet",
    content: "Trust Wallet is a mobile wallet that supports SOL",
    link: "#",
  },
  {
    icon: icon4,
    title: "Backpack",
    content: "A home for your xNFTs",
    link: "#",
  },
  {
    icon: icon5,
    title: "Brave",
    content: "Private Browser, Search, and Web3 Wallet",
    link: "#",
  },
];
