import { Banner } from "@/components/Banner";
import { BannerToken } from "./BannerToken";
import { Support } from "./Support";
import imgBanner from "@/assets/images/token/bannerToken.png";
import { SubBanner } from "@/components/SubBanner";
export default function Token() {
  const bannerContent = {
    title: "Permissioned tokens on a permissionless network",
    des: "Built in collaboration with large institutions, token extensions unlock rich native functionality designed for complex behaviors, without compromising on security or scalability. Get started today.",
    button1: "START BUILDING",
    button2: "GET IN TOUCH",
    img: imgBanner,
  };
  return (
    <div className="relative overflow-hidden">
      <Banner content={bannerContent} />
      <SubBanner
        title={"Read the technical paper"}
        des={
          "Token extensions represent a leap forward for the Solana protocol. Dig into the technical explanation, a look at specific token extensions, and potential use cases."
        }
        button={"Read"}
      />
      <Support />
      <div
        className="-z-1 w-full h-[130vh] absolute left-[20%] top-[30%] bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer-three.png)`,
        }}
      ></div>
      <div
        className="-z-1 w-full h-[130vh] absolute left-[1%] top-[60%] bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer-three.png)`,
        }}
      ></div>
    </div>
  );
}
