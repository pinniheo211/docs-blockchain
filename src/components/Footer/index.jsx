import { communities, navFooter } from "@/constants";
import { PATHS } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import {
  BotContainer,
  CategoryContainer,
  FooterContainer,
  Icon,
  LeftSide,
  LogoWrapper,
  Name,
  RightSide,
  Top,
  TopContainer,
} from "./styles";
const Footer = ({ isDocs }) => {
  return (
    <footer
      className={`${
        !isDocs === "isDocs" ? "bg-black-2" : "transparent "
      } relative text-primary-3 border-t-[1px] border-[#282829]`}
    >
      <TopContainer>
        <LogoWrapper>
          <Link href={PATHS.HOME}>
            <Image
              src="/iconFooter.png"
              width={300}
              height={60}
              alt={`Logo`}
              className="mx-auto max-w-64 sm:max-w-none"
            />
          </Link>
          <Link href={PATHS.REGISTER}>
            <span className="block sm:my-0 w-max cursor-pointer relative font-bold duration-300 text-white px-5 py-2 md:px-7 md:py-2 text-xs md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full">
              REGISTER NOW
            </span>
          </Link>
        </LogoWrapper>
        <Top>
          {navFooter?.map((category) => (
            <CategoryContainer key={category?.title}>
              <Name>{category?.title}</Name>
              {category?.child?.map((child, index) => (
                <Link
                  key={index}
                  href={child?.link}
                  target={`${index == 0 || index == 1 ? "_blank" : ""}`}
                  rel="noopener noreferrer"
                >
                  {child?.name}
                </Link>
              ))}
            </CategoryContainer>
          ))}
        </Top>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-white font-extrabold min-w-max">
            GET CONNECTED
          </p>
          <div className="flex flex-wrap gap-3">
            {communities?.map((child, index) => (
              <Icon key={index} target="_blank">
                {child?.icon}
              </Icon>
            ))}
          </div>
        </div>
      </TopContainer>
      <BotContainer>
        <LeftSide>
          CopyRight © 2024 Now Blockchain. All rights reserved.
        </LeftSide>

        {/* <RightSide>
          {communities?.map((child, index) => (
            <Icon key={index} target="_blank">
              {child?.icon}
            </Icon>
          ))}
        </RightSide> */}
      </BotContainer>
    </footer>
  );
};
export default Footer;
