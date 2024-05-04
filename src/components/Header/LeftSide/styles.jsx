import styled from "styled-components";
import tw from "twin.macro";

export const IconWrapper = styled.div`
  ${tw`duration-150 min-w-[5px]`}
`;

export const LeftSide = styled.div`
  ${tw`hidden h-full lg:flex items-center gap-3 xl:gap-7 justify-start`}
  >button:last-child {
    > div:last-child {
      ${tw`right-0 left-auto xl:right-auto xl:left-0`}
    }
  }
`;

export const Item = styled.p`
  ${tw`text-sm font-medium min-w-max duration-150 text-primary-3 dark:text-white `}
`;

export const ItemArrow = styled.span`
  ${tw`text-white w-3 h-3`}
`;
export const ItemHeader = styled.div`
  ${tw`flex gap-1 rounded-md items-center p-2 relative`}
`;

export const NavItem = styled.button`
  ${tw`relative h-full flex gap-1 items-center cursor-pointer`}
  ${IconWrapper} {
    ${tw`duration-150 `}
    transform:rotate(0deg)
  }
  &:hover {
    ${Item}, ${ItemArrow} {
      ${tw`text-primary-4`}
    }
  }
`;

export const SubMenu = styled.div`
  ${tw`bg-[#060216]  absolute top-[50px] right-2/4 -translate-x-[-50%] rounded-xl   z-30 border border-line`}
`;

export const SubTitle = styled.p`
  ${tw`text-white font-bold text-lg max-w-[300px]`}
`;

export const SubDesc = styled.p`
  ${tw`text-[#858894] font-normal text-base`}
`;

export const ListSubMenu = styled.li`
  ${tw`border border-transparent rounded-lg -mx-3 px-3 py-1.5 text-left`}
  &:hover {
    ${tw`border-line bg-[#151118]`}
    ${SubDesc} {
      ${tw`text-white`}
    }
  }
`;
