import { Banner } from "@/components/Banner";
import imgBuild from "@/assets/images/home/build.png";

export const AboutFinance = () => {
  const DATA_DUMMY = {
    title1: "Finance",
    des: "Redefining Finance with Unmatched Security, Lower Costs, and Total Transparency. Join the revolution for a smarter, safer, and more transparent financial future!    ",

    img: imgBuild,
  };
  return (
    <div className="overflow-hidden">
      <Banner content={DATA_DUMMY} />
      <div className=" container relative flex flex-col gap-10 py-10 max-w-5xl">
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Elevating Trust, Security, and Transparency:
          </h1>
          <p>
            NOW Blockchain leverages Proof of Mobile to enhance trust through
            seamless data traceability across networks. With an immutable
            ledger, it ensures unparalleled security and transparency. Network
            participants manage access permissions, guaranteeing information
            integrity.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Driving Cost Efficiency and Streamlined Operations:
          </h1>
          <p>
            Through Proof of Mobile, NOW Blockchain slashes overhead and
            transaction costs by automating processes and eliminating
            intermediaries. Its swift execution and automation enhance
            operational efficiency, paving the way for a leaner, more
            cost-effective financial landscape.
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
            Championing Transparency and Immutable Transactions:
          </h1>
          <p>
            NOW Blockchain, fueled by Proof of Mobile, ensures all participants
            access real-time information simultaneously, fostering complete
            transparency. Transactions are immutably recorded and time-stamped,
            creating a fraud-resistant environment with a robust audit trail.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Pioneering Supply Chain Traceability with Mobile Validation:
          </h1>
          <p>
            NOW Blockchain enables direct sharing of provenance data with
            customers, using mobile validation to expose supply chain weaknesses
            and combat issues like counterfeiting and environmental concerns.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl  font-bold ">
            Driving Industry-Wide Transformation with Mobile Innovation:
          </h1>
          <p>
            NOW Blockchain, empowered by Proof of Mobile, is poised to
            revolutionize global finance. From trade to banking, its
            implementation promises lower costs, faster execution, and enhanced
            auditability, ushering in a new era of efficiency and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
