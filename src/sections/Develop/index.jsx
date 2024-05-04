import { BannerDevelop } from "./BannerDevelop";
import { TitleDevelop } from "./BannerDevelop/style";
import { ChangeLog } from "./ChangeLog/idex";
import { Guide } from "./Guide";
import { Learn } from "./Learn";
import { Source } from "./Source";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export const Developer = () => {
  return (
    <div className="overflow-hidden">
      <BannerDevelop />
      <div className="relative py-10">
        <Learn />
        <div
          className="z-1 w-full h-[130vh] absolute left-[30%] -top-[10%]  bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="-z-1 w-full h-[130vh] absolute left-[10%] top-[20%]  bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="-z-1 w-full h-[130vh] absolute left-[20%] top-[50%]  bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <div
          className="-z-1 w-full h-[130vh] absolute left-[2%] top-[70%]  bg-no-repeat"
          style={{
            backgroundImage: `url(../../assets/images/layer-three.png)`,
          }}
        ></div>
        <Guide />
        <Source />
        <ChangeLog />
      </div>
    </div>
  );
};
