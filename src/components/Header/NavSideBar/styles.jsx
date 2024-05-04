import styled from "styled-components";
import tw from "twin.macro";

export const NavSideBarContainer = styled.div`
  ${tw`py-1.5 relative z-10 bg-black h-screen  overflow-y-scroll`}
`;

export const CloseWrapper = styled.div`
  ${tw`px-1.5 flex justify-end`}
`;
export const Close = styled.button`
  ${tw`w-4 h-4 flex justify-center items-center`}
`;
export const Head = styled.div`
  ${tw`px-1.5 mb-2`}
`;
export const Login = styled.a`
  ${tw`block w-full text-center py-1 my-1 cursor-pointer block relative font-bold duration-300 dark:text-gray-400 text-black dark:text-white dark:text-white hover:text-primary-4 px-2 sm:px-3 py-1 text-sm hover:bg-primary-4  hover:text-white rounded-md`}
`;
export const Register = styled.a`
  ${tw`block w-full text-center py-1 my-1 cursor-pointer block text-white font-bold hover:text-white rounded-md px-3 duration-300 py-1 text-sm bg-primary-4 hover:bg-opacity-60`}
`;

export const NavWrapper = styled.div`
  ${tw`w-full max-h-[calc(100vh - 200px)] overflow-y-auto `}
`;
export const NavWrapperDesktop = styled.div`
  ${tw`block lg:hidden 2xl:block px-3`}
`;
export const NavWrapperLaptop = styled.div`
  ${tw`hidden lg:block 2xl:hidden`}
`;
export const NavItem = styled.div`
  ${tw`w-full max-h-screen overflow-y-auto border-b-[0.5px] border-white`}
`;
export const Item = styled.button`
  ${tw`z-20 flex items-center justify-between w-full p-2 duration-300 hover:bg-main`}
  ${({ open }) => open && tw`bg-main`}
  svg {
    &:nth-child(2) {
      ${({ open }) =>
        open ? `transform:rotate(-180deg)` : `transform:rotate(0deg)`}
    }
  }
`;
export const LeftSide = styled.div`
  ${tw`flex items-center w-full gap-1 `}
`;
export const IconWrapper = styled.div`
  ${tw`w-2.5 min-w-max h-2.5 flex items-center justify-center`}
`;
export const Name = styled.div`
  ${tw`text-sm text-white`}
`;
export const SubNavItemContainer = styled.div`
  ${tw`w-full overflow-scroll text-xs duration-150 max-h-0`}
  ${({ isOpen }) => isOpen && `max-height: 300px`};
  > div {
    ${tw`rounded-none`}
  }
`;
export const SubItem = styled.button`
  ${tw`w-full pl-4 pr-1.5 py-1 text-left duration-300 hover:bg-primary-5`}
`;
export const Tag = styled.p`
  ${tw`relative text-white flex items-center py-[2px] px-0.5 rounded-md bg-primary-4 text-2xs`}
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    z-index: 4;
    transform: translateY(-50%);
    border-left: 3px solid transparent;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 3px solid #03a57e;
  }
`;

export const Profile = {
  Container: styled.div``,
  Wrapper: styled.div`
    ${tw`z-20 flex flex-row items-center justify-between w-full gap-2 p-2 `}
  `,
  AvatarWrapper: styled.div`
    ${tw`flex justify-center w-full h-auto`}
    svg {
      ${tw`w-6 h-6`}
    }
  `,
  UserName: styled.h4`
    ${tw`w-full my-1 text-lg font-semibold text-center break-all dark:text-gray-400 text-primary-3`}
  `,
  VerifyWrapper: styled.div`
    ${tw`flex gap-1`}
  `,
  VipWrapper: styled.div`
    ${tw`flex gap-1 text-yellow`}
  `,
  IconWrapper: styled.div`
    img,
    svg {
      ${tw`w-2 h-2`}
    }
  `,
};
export const Theme = {
  Container: styled.div`
    ${tw`z-20 flex flex-row items-center justify-between w-full gap-2 p-2 duration-300 `}
  `,
  Name: styled.div`
    ${tw`flex flex-row items-center gap-2`}
  `,
  ToggleContainer: styled.div`
    ${tw`w-6 h-2.5 relative p-0.5 rounded-xl bg-line`}
  `,
  IconWrapper: styled.div`
    ${tw`flex absolute left-0.5 top-1/2 items-center justify-center w-2 h-2 duration-150  p-[2px] bg-white rounded-full`}
    transform: translateY(-50%);
    ${({ isDark }) => isDark && `transform:translate(calc(100% + 10px),-50%)`}
  `,
};

export const Line = styled.div`
  ${tw`w-full mb-2 h-[1px] bg-line`}
`;
export const LogoutContainer = styled.div`
  ${tw`z-20 flex lg:hidden 2xl:flex flex-row items-center w-full gap-2 p-2 duration-300 dark:text-gray-400 text-primary-3 bg-primary-4 mb-7`}
`;
