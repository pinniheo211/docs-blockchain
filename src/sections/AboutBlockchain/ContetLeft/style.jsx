import styled from "styled-components";
import tw from "twin.macro";
import bn from "../../../assets/images/layer-three.png";
export const ContentLeftContainer = styled.div`
  ${tw`w-full flex gap-10 flex-col`}
  & p${tw`text-white`}
`;

export const Background = styled.div`
  ${tw`bg-no-repeat  w-full h-full bg-center overflow-hidden absolute -z-1 top-0 left-0 bg-cover`}

  background-image: url("../../../assets/images/layer-three.png");
`;
