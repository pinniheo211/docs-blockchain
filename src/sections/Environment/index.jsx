import imgBanner from "@/assets/images/bannerEnviron.png";
import { Banner } from "@/components/Banner";
import { Cando } from "./Cando";
import { Chart } from "./Chart";
import { Ecosystem } from "./Ecosystem";
import { InforEnvironment } from "./Infor";
import { Report } from "./Report";

export const Environment = () => {
  const bannerContent = {
    title: "Carbon neutral. \n  Climate focused.",
    des: "How the Now Blockchain Foundation and greater community are building a better, more energy-efficient web3.",
    img: imgBanner,
  };
  return (
    <div className="overflow-hidden">
      <Banner content={bannerContent} />
      <div className="relative py-10">
        <div
          className="-z-1 w-full h-[130vh] absolute left-[23%] top-[3%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer.png)`,
          }}
        ></div>
        <InforEnvironment />

        <div
          className="-z-1 w-full h-[130vh] absolute left-[15%] top-[25%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>

        <Chart />
        <Report />
        <Ecosystem />
        <Cando />
      </div>
    </div>
  );
};
