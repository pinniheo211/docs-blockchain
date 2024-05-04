import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import { CARD_DUMMY } from "./helper";
import { SectionSlider, Slider } from "./styles";
import Image from "next/image";
export const OurClients = () => {
  return (
    <SectionSlider>
      <Slider.Wrapper>
        <Slider.Title className="slider-title">
          POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
        </Slider.Title>

        <Marquee>
          {CARD_DUMMY?.map((item, index) => (
            <div key={index} className="pr-3 w-3/4 sm:w-full md:pr-20">
              <Image
                src={item?.img}
                height={200}
                width={200}
                alt={`Our Clients`}
              />
            </div>
          ))}
        </Marquee>
      </Slider.Wrapper>
    </SectionSlider>
  );
};
