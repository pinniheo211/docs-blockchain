import Image from "next/image";
import { ButtonCard, Card } from "./style";
import frame2 from "@/assets/images/environ/Frame-2.png";
import icon1 from "@/assets/images/environ/icon1.png";
import icon2 from "@/assets/images/environ/icon2.png";
import icon3 from "@/assets/images/environ/icon3.png";
import icon4 from "@/assets/images/environ/icon4.png";
export const Ecosystem = () => {
  return (
    <div className="container text-center w-full mt-20">
      <h1 className="text-white font-semibold text-4xl 2xl:text-5xl">
        A climate-focused ecosystem
      </h1>
      <div
        className="w-full gap-5 xl:gap-10 flex justify-between items-center md:mx-auto lg:flex-row flex-col bg-gradient-transparent-purple lg:px-10 p-5 mt-10 py-8 lg:py-12 xl:py-16 2xl:py-20 rounded-2xl"
        data-aos="zoom-in"
      >
        <Card>
          <h3 className="text-white text-3xl font-semibold">GainForest</h3>
          <p className="text-2xl mt-3 xl:mt-4 2xl:mt-5 text-[#C2C2C2]">
            Gainforest combines artificial intelligence with
            community-engagement to get real-time data on the world’s forests
            and turn conservation areas into digital impact certificates, unique
            to the space each certificate is tied to.
          </p>
          <div className="flex gap-3 lg:flex-row md:flex-row flex-col mb-10 items-cennter mt-10">
            <ButtonCard>READ MORE</ButtonCard>
            <ButtonCard>VISIT GAINFOREST</ButtonCard>
          </div>
        </Card>
        <Image src={frame2} alt="frame" />
      </div>
      <div
        className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10 mt-10"
        data-aos="fade-up"
      >
        {ecoCard.map((item, index) => {
          return (
            <div
              key={index}
              className="p-5 xl:p-7 2xl:p-10 rounded-xl flex flex-col gap-5 xl:gap-8 bg-gradient-transparent-purple text-left"
            >
              <div className="flex items-center gap-3">
                <Image alt="Banner" src={item.icon} width={50} height={50} />
                <p className="text-2xl font-semibold text-white">
                  {item.title}
                </p>
              </div>
              <p className="text-xl text-primary-1">{item?.des}</p>
              <ButtonCard>{item.button}</ButtonCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ecoCard = [
  {
    icon: icon1,
    title: "EcoToken",
    des: "EcoToken brings environmental credits to Now Blockchain, offering an easy way for anyone to have an environmental impact. This is complemented by recognition through leaderboards and NFT Impact Certificates.",
    button: "VISIT ECOTOKEN",
    link: "#",
  },
  {
    icon: icon2,
    title: "SunriseStake",
    des: "SunriseStake supports climate-positive staking on Now Blockchain.",
    button: "VISIT GAINFOREST",
    link: "#",
  },
  {
    icon: icon3,
    title: "Outerverse by Outside Interactive",
    des: "The Outerverse is an NFT-based outdoor creator community and marketplace on a mission to inspire more people to get outside – and 20% of net revenue from all sales goes to nonprofits working for sustainability and DEI.",
    button: "VISIT OUTERVERSE",
    link: "#",
  },
  {
    icon: icon4,
    title: "WiHi",
    des: "WiHi is a decentralized solution to the problems of weather forecasting and climate monitoring.",
    button: "VISIT WIHI",
    link: "#",
  },
];
