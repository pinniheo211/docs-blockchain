import { Banner } from "@/components/Banner";
import imgBuild from "@/assets/images/home/build.png";
export const AboutCommerce = () => {
  const DATA_DUMMY = {
    title: "Commerce",
    des: "Leveling up the gaming experience! Transforming development, play, and monetization, NOW empowers players, ensures transparency, and unlocks exciting opportunities for developers and gamers alike. 🎮🌐",

    img: imgBuild,
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container relative flex flex-col gap-10 py-10 max-w-5xl">
        <div className=" flex flex-col gap-5 ">
          <h1 className="text-3xl  font-bold ">Elevated Security:</h1>
          <p>
            Proof of Mobile ensures enhanced security with decentralized
            networks and cryptographic encryption, reducing the risk of data
            breaches and fraudulent transactions. Immutable ledgers guarantee
            transparency and prevent tampering, fostering trust and integrity in
            transactions.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">Efficiency and Cost Savings:</h1>
          <p>
            NOW Blockchain streamlines processes, slashing transaction costs by
            eliminating intermediaries and reducing paperwork. Businesses
            operate more efficiently, reallocating resources effectively for
            optimized operations and improved profitability.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">Swift Transactions:</h1>
          <p>
            With NOW Blockchain, transactions happen almost instantly,
            facilitating seamless peer-to-peer interactions and accelerating
            cross-border payments. Real-time settlement enhances cash flow for
            merchants, boosting operational agility and responsiveness.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Empowered Supply Chain Management:
          </h1>
          <p>
            NOW Blockchain enhances supply chain transparency and traceability,
            enabling businesses to track products from origin to delivery. By
            mitigating counterfeit goods and supply chain inefficiencies,
            authenticity and quality assurance are upheld, fostering consumer
            trust.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Empowered Supply Chain Management:
          </h1>
          <p>
            NOW Blockchain enhances supply chain transparency and traceability,
            enabling businesses to track products from origin to delivery. By
            mitigating counterfeit goods and supply chain inefficiencies,
            authenticity and quality assurance are upheld, fostering consumer
            trust.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Empowered Supply Chain Management:
          </h1>
          <p>
            NOW Blockchain enhances supply chain transparency and traceability,
            enabling businesses to track products from origin to delivery. By
            mitigating counterfeit goods and supply chain inefficiencies,
            authenticity and quality assurance are upheld, fostering consumer
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};
