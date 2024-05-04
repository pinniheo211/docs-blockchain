import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
  ${tw``}
`;
export const TopContainer = styled.div`
  ${tw`flex items-center lg:items-start container lg:flex-row flex-col gap-10 lg:gap-20 justify-between py-5 md:py-6 lg:pt-10`}
`;
export const Top = styled.div`
  ${tw`md:flex flex flex-wrap gap-10 items-start justify-between  md:gap-y-4  w-full lg:w-auto xl:max-w-2xl`}
`;
export const CategoryContainer = styled.div`
  ${tw`col-span-1`};
  > a {
    ${tw`mt-3 text-base font-normal duration-300 block hover:text-primary-4 text-white`}
  }
`;
export const IconWrapper = styled.div`
  ${tw`grid grid-cols-3 gap-2 max-w-[145px]`}
`;
export const Name = styled.div`
  ${tw`py-1 text-lg text-white font-extrabold lg:h-8`}
`;
export const Icon = styled.a`
  ${tw`cursor-pointer`}
`;
export const LogoWrapper = styled.div`
  ${tw`flex flex-col gap-6 items-center w-full sm:w-auto  justify-center sm:justify-start max-w-md`}
`;

export const BotContainer = styled.div`
  ${tw`container flex justify-between items-center py-8 md:flex-row flex-col gap-5`}
  .lazy-load-image-background {
    width: auto !important;
  }
`;

export const LeftSide = styled.div`
  ${tw`text-center`}
`;
export const RightSide = styled.div`
  ${tw`flex gap-x-3`}
  >span {
    cursor: pointer;
  }
`;
