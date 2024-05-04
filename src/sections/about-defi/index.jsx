import { Banner } from "@/components/Banner";
import imgBuild from "@/assets/images/home/build.png";

export const AboutDefi = () => {
  const DATA_DUMMY = {
    title: "Defi Revolutionizing",
    des: "Unlock limitless possibilities for financial freedom, security, and innovation. Explore the future of decentralized finance with us today!",

    img: imgBuild,
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container relative flex flex-col gap-10 py-10 max-w-5xl">
        <div className=" flex flex-col gap-5 ">
          <h1 className="text-3xl  font-bold ">Financial Services:</h1>
          <p>
            NOW Blockchain leverages Proof of Mobile to transform traditional
            financial services, eliminating intermediaries like banks and
            brokerage firms. Direct transactions reduce fees and bureaucracy,
            paving the way for a more efficient and accessible financial
            ecosystem.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Empowering Global Accessibility:
          </h1>
          <p>
            With NOW Blockchain, DeFi opens financial markets to anyone with
            internet access, irrespective of geographical location. This
            inclusivity promotes financial democratization and empowers the
            unbanked, fostering greater financial inclusion worldwide.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Enhancing Speed and Efficiency:
          </h1>
          <p>
            Transactions on NOW Blockchain's DeFi networks are lightning-fast,
            thanks to the absence of intermediaries. Smart contracts execute
            automatically, minimizing delays and human error, ensuring seamless
            and efficient financial operations.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Ensuring Transparency and Trust:
          </h1>
          <p>
            NOW Blockchain records DeFi transactions on a transparent
            blockchain, enabling users to verify and audit transactions easily.
            This transparency enhances trust and accountability, establishing a
            robust foundation for decentralized financial activities.
          </p>
        </div>

        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Ensuring Transparency and Trust:
          </h1>
          <p>
            NOW Blockchain records DeFi transactions on a transparent
            blockchain, enabling users to verify and audit transactions easily.
            This transparency enhances trust and accountability, establishing a
            robust foundation for decentralized financial activities.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Providing Unparalleled Control:
          </h1>
          <p>
            Individuals maintain full custody of their financial assets with NOW
            Blockchain's DeFi solutions. No central authority dictates terms or
            fees. Users wield complete control over their funds via encrypted
            digital keys, ensuring utmost security and autonomy.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Fostering Innovation and Adaptability:
          </h1>
          <p>
            NOW Blockchain's DeFi ecosystem fosters innovation by encouraging
            the development of new financial products and services. Its modular
            framework facilitates interoperable applications on public
            blockchains, fostering creativity and adaptability in the
            ever-evolving financial landscape.
          </p>
          <p>
            Join NOW Blockchain and embrace the disruptive potential of DeFi,
            where accessibility, transparency, and control redefine the future
            of finance! 🚀📱
          </p>
        </div>
      </div>
    </div>
  );
};
