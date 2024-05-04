import styled from "styled-components";
import tw from "twin.macro";

export const Card = styled.div`
  ${tw` lg:w-2/4 w-full text-left`}
`;

export const ButtonCard = styled.button`
  ${tw`block w-max cursor-pointer relative font-bold duration-300 text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 text-xs md:text-base hover:-translate-y-0.5 border-text-500 border rounded-full`}
`;
