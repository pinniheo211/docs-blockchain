import imgBanner from "@/assets/images/gaming/banner.png";
import { Banner } from "@/components/Banner";
export const Banners = () => {
  const DATA_DUMMY = {
    title1: "Web3 games.",
    title2: "Web2 speeds.",
    des: "Build the games of the future at the speed of the internet. Now blockchain's high throughput and low fees make it a perfect fit for your masterpiece.",
    button1: "START BUILDING",
    button2: "REACH OUT",
    img: imgBanner,
  };
  return <Banner content={DATA_DUMMY} type={"GAMING"} />;
};
