import styled from "styled-components";
import tw from "twin.macro";

export const RightSide = styled.div`
  ${tw`items-center justify-end h-full gap-1 flex gap-3`}
`;

export const Login = styled.a`
  ${tw`block w-max cursor-pointer block relative font-bold duration-300 text-white hover:text-white px-2 sm:px-5 py-1 md:py-1.5 text-sm md:text-base bg-gradient-dark-purple hover:-translate-y-0.5 rounded-full`}
`;

export const Register = styled.a`
  ${tw`block w-max relative cursor-pointer block relative font-bold duration-300 text-primary-4 text-white px-4 sm:px-7 py-1 md:py-1.5 text-sm md:text-base hover:-translate-y-0.5 bg-gradient-dark-pink rounded-full`}
`;

export const DivWrapper = styled.div`
  ${tw`flex justify-end items-center gap-2 mr-1 sm:gap-2`}
`;
