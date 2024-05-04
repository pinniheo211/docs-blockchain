import { Banner } from "@/components/Banner";
export const NowCoin = () => {
  const DATA_DUMMY = {
    title: "About Now Coin",
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container py-[100px] relative flex flex-col gap-10 py-10 max-w-5xl">
        <p className="lg:text-3xl text-lg leading-relaxed">
          NOW coin serves as the fundamental unit of value within the NOW
          blockchain ecosystem and its interconnected platforms and affiliates.
          Designed to facilitate seamless transactions and interactions within
          the network, NOW coin embodies a versatile digital currency utilized
          for various purposes including payments, rewards, governance, and
          decentralized applications. As the backbone of the NOW blockchain, NOW
          coin plays a pivotal role in fostering innovation, efficiency, and
          trust within the ecosystem, empowering users to engage in secure,
          transparent, and decentralized transactions across a diverse range of
          applications and services.
        </p>
      </div>
    </div>
  );
};
