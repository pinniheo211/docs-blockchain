import styled from "styled-components";
import tw from "twin.macro";

export const CardTitle = styled.div`
  ${tw`relative ml-5`}
`;

export const TitleCard = styled.p`
  ${tw`text-white font-semibold text-2xl`}
`;

export const Line = styled.div`
  ${tw`absolute top-2/4 translate-y-[-50%] -left-4 w-1 h-full rounded-sm`}
  background-color: ${({ color }) => color};
`;
