import imgBanner from "@/assets/images/develop/bannerdevlop1.png";
import { Banner } from "@/components/Banner";
export const BannerDevelop = () => {
  const DATA_DUMMY = {
    title: "Developer \n Resources",
    des: "A manual for joining the Now Blockchain ecosystem. By builders for builders.",
    button1: "BUILD NOW",
    button2: "STACK EXCHANGE",
    img: imgBanner,
  };
  return <Banner content={DATA_DUMMY} type={""} />;
};
