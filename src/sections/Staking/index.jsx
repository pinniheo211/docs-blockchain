import { Banner } from "@/components/Banner";
export const Staking = () => {
  const DATA_DUMMY = {
    title: "Staking",
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container py-[100px] relative flex flex-col gap-10 py-10 max-w-5xl">
        <p className="lg:text-3xl text-lg leading-relaxed">
          Stake your NOW coins to bolster the security of the NOW blockchain
          network while simultaneously earning rewards. By delegating NOW to
          validators, participants actively contribute to the network's economic
          stability and resilience. This staking mechanism not only enhances the
          security of the chain but also provides an avenue for users to earn
          rewards for their support and participation. Furthermore, stakers can
          engage in governance votes, allowing them to play a significant role
          in shaping the future of the network and influencing key decisions.
          Secure the chain, earn rewards, and actively participate in governance
          through NOW coin staking on the NOW blockchain network.
        </p>
      </div>
    </div>
  );
};
