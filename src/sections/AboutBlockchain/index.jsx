import { BannerAbout } from "./BannerAbout";
import { ContentRight } from "./ContentRight";
import ContentLeft from "./ContetLeft";

export const AboutBlockchain = () => {
  return (
    <div className="overflow-hidden">
      <BannerAbout />
      <div className="relative pt-5">
        <div className="container flex lg:flex-row md:flex-row flex-col xl:gap-16 2xl:gap-36 gap-8 items-start py-10 z-20">
          <ContentLeft />
          {/* <ContentRight /> */}
        </div>
        <div
          className="z-1 w-full h-[130vh] absolute left-[1%] top-[1%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-two.png)`,
          }}
        ></div>
        <div
          className="z-1 w-full h-[130vh] absolute left-[35%] top-[20%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="z-1 w-full h-[130vh] absolute left-[5%] top-[50%] bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};
