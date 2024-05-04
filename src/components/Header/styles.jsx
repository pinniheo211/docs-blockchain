import styled from "styled-components";
import tw from "twin.macro";

export const HeaderWrapper = styled.div`
  ${tw`shadow-md w-full h-[70px] transition bg-bgMain duration-200 ease-in-out z-100`}
`;

export const HeaderContainer = styled.div`
  ${tw`flex items-center w-full h-full px-2 2xl:px-4 lg:grid relative z-20 container mx-auto`};
  grid-template-columns: 290px 1fr;
`;

export const Logo = styled.img`
  ${tw`object-cover h-full`}
`;

export const ControlWrapper = styled.div`
  ${tw`flex w-full h-full justify-end lg:justify-between items-center gap-0.5 `}
`;

export const Hamburger = styled.button`
  ${tw`block min-w-[30px] w-10 pl-0 lg:hidden`},
`;
export const NavSideBarContainer = styled.div`
  ${tw`fixed top-0 bottom-0 right-0 w-[90%] max-w-md duration-300 bg-white z-100 max-w-sm sm:w-[375px] dark:bg-black-2`}
`;
export const OverlayModal = styled.div`
  ${tw`fixed top-0 bottom-0 left-0 right-0 z-50 duration-150 dark:bg-[#01203594] bg-opacity-40 bg-black-2`}
`;

export const DivModal = styled.div`
  ${tw`w-36 h-36 bg-red-300`}
`;
