import { Banner } from "@/components/Banner";
import imgBanner from "@/assets/images/gaming/banner.png";

export const AboutGaming = () => {
  const DATA_DUMMY = {
    title: "Gaming",
    des: "Leveling up the gaming experience! Transforming development, play, and monetization, NOW empowers players, ensures transparency, and unlocks exciting opportunities for developers and gamers alike. 🎮🌐",

    img: imgBanner,
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container relative flex flex-col gap-10 py-10 max-w-5xl">
        <div className=" flex flex-col gap-5 ">
          <h1 className="text-3xl  font-bold ">
            Fostering Community Participation and Personal Investment:
          </h1>
          <p>
            NOW Blockchain-powered games encourage community involvement, giving
            players a voice in governance and fostering personal investment
            through NFT ownership.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Facilitating Interoperability and Cross-Game Assets:
          </h1>
          <p>
            Interoperable standards like ERC-721 and ERC-1155 enable seamless
            asset transfer between games, allowing players to use their NFTs
            across multiple titles for an enriched gaming experience.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Empowering Fraud Prevention and Robust Data Security:
          </h1>
          <p>
            With Proof of Mobile technology, NOW Blockchain establishes an
            unalterable record, encrypted end-to-end to thwart fraud and
            unauthorized access. Personal data anonymization and distributed
            storage fortify data security against cyber threats, ensuring
            uncompromised integrity.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Ensuring Verifiable Scarcity and Rarity:
          </h1>
          <p>
            Developers can create scarce assets with verifiable scarcity on NOW
            Blockchain, enhancing the value of in-game items through provably
            rare items and limited supply mechanisms.
          </p>
        </div>
      </div>
    </div>
  );
};
