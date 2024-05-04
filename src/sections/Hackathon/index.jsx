import { BannerHack } from "./Baner";
import Infor from "./Baner/Infor";
import { HackathonsVer } from "./HackathonsVer";
import { Mentor } from "./Mentor";
import { Overview } from "./Overview";
import { Platform } from "./Platform";

export default function Hackathon() {
  return (
    <div className="relative overflow-hidden">
      <BannerHack />
      <Infor />
      <Mentor />

      <div className="bg-gradient-linear-pink">
        <Platform />
      </div>
      <HackathonsVer />
      <Overview />
      <div
        className="-z-1 w-full h-[130vh] absolute left-[5%] top-[70%] bg-no-repeat"
        style={{
          backgroundImage: `url(../../assets/images/layer-three.png)`,
        }}
      ></div>
    </div>
  );
}
