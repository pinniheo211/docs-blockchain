import styled from "styled-components";
import tw from "twin.macro";

export const Underline = styled.div`
  ${tw`absolute -bottom-4 left-0 w-full h-[8px] rounded-l-lg bg-gradient-to-r from-[rgba(214, 4, 115, 1)] to-[rgba(214, 4, 115, 0)]`}
`;

export const Title = styled.p`
  ${tw`text-3xl lg:text-4xl  font-bold text-white break-words`}
`;
