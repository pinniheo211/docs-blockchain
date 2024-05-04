import styled from "styled-components";
import tw from "twin.macro";

export const SectionSlider = styled.section`
  ${tw`py-10 md:py-16`}
`;

export const Slider = {
  Wrapper: styled.div`
    ${tw`text-center text-pink flex flex-col gap-7`}
  `,
  Title: styled.p`
    ${tw`md:text-2xl text-xl pb-3 font-semibold container sm:max-w-none md:max-w-none lg:container mx-auto `}
  `,
};

export const ImgWrapper = styled.div`
  ${tw`container sm:max-w-none md:max-w-none lg:container mx-auto flex items-start justify-center py-7`}
  >span {
    ${tw`max-w-xl h-[300px] sm:min-h-[500px] md:h-full`}
  }
`;
