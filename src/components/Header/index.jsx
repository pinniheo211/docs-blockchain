import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import NavSideBar from "./NavSideBar";
import RightSide from "./RightSide";

import Link from "next/link";
import {
  ControlWrapper,
  Hamburger,
  HeaderContainer,
  HeaderWrapper,
  NavSideBarContainer,
  OverlayModal,
} from "./styles";
import { PATHS } from "@/routes";
import Image from "next/image";

const Header = () => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  const handleOpen = () => {
    setIsOpenNavBar(true);
  };
  const handleClose = () => {
    setIsOpenNavBar(false);
  };

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 70) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <HeaderWrapper
      className={
        animateHeader ? "sticky top-0 bg-bgMain animate-wiggle" : "block"
      }
    >
      <HeaderContainer>
        <Link href={PATHS.HOME}>
          <Image src="/Layer_1-2.png" width={270} height={80} alt={`Logo`} />
        </Link>
        <ControlWrapper>
          <LeftSide />
          <RightSide />
        </ControlWrapper>
        <Hamburger onClick={handleOpen}>
          <span className="text-white">
            <MenuIcon />
          </span>
        </Hamburger>
      </HeaderContainer>
      <NavSideBarContainer
        className={isOpenNavBar ? "translate-x-0" : "translate-x-[100%]"}
      >
        <NavSideBar setIsOpenNavBar={setIsOpenNavBar} />
      </NavSideBarContainer>
      {isOpenNavBar && <OverlayModal onClick={handleClose} />}
    </HeaderWrapper>
  );
};

export default Header;
