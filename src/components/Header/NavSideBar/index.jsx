import { navList } from "@/constants";
import useAuths from "@/hooks/useAuth";
import ArrowDownIcon from "@/icons/Arrow/Down";
import CloseModalIcon from "@/icons/CloseModal";
import { useState } from "react";
import {
  Close,
  CloseWrapper,
  Head,
  Item,
  LeftSide,
  Login,
  Name,
  NavItem,
  NavSideBarContainer,
  NavWrapper,
  NavWrapperDesktop,
  Register,
} from "./styles";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const NavSideBar = ({ setIsOpenNavBar }) => {
  const { isAuth } = useAuths();
  const [navOpen, setNavOpen] = useState("");
  const [openItems, setOpenItems] = useState({});

  const handleClick = (index) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };
  const handleOpenNav = (nav, index) => {
    if (!nav?.children || nav?.children?.length === 0) {
      handleClose();
      // redirect(nav?.routeName);
    } else {
      if (navOpen === nav?.name) {
        setNavOpen("");
      } else {
        const subNavs = document.querySelectorAll("#nested-item");
        const height = subNavs[index]?.scrollHeight;
        setNavOpen(nav?.name);
      }
    }
  };

  const handleClose = () => {
    setIsOpenNavBar(false);
  };
  const handleClickSubMenu = (subMenu) => {};
  return (
    <NavSideBarContainer>
      <CloseWrapper>
        <Close onClick={handleClose}>
          <CloseModalIcon color="text-white" />
        </Close>
      </CloseWrapper>
      {/* <Head>
        <Login>Login</Login>
        <Register>Sign Up</Register>
      </Head> */}
      <List
        sx={{ width: "100%", padding: "0 10px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {navList.map((nav, index) => (
          <div key={index}>
            <ListItemButton
              className="flex justify-between"
              onClick={() => handleClick(index)}
            >
              <p className="text-white">{nav.name}</p>
              {openItems[index] ? (
                <span className="text-white">
                  <ExpandLess />
                </span>
              ) : (
                <span className="text-white">
                  <ExpandMore />
                </span>
              )}
            </ListItemButton>
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <div className="p-5 bg-[#060216] rounded-lg">
                <div className="flex gap-3 items-center mb-5">
                  <Image
                    src={nav?.grandChild?.logo}
                    width={30}
                    height={30}
                    alt="Banner"
                  />
                  <p className="text-white">{nav?.grandChild?.title}</p>
                </div>
                {index === 1 ? (
                  <p className="text-white font-bold text-lg">Coming Soon</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {nav?.grandChild?.sub?.map((subnav, i) => (
                      <List key={i} component="div" disablePadding>
                        <ListItem className="px-3 py-3 rounded-xl border border-transparent hover:border-line hover:bg-[#151118] w-full">
                          <ListItemButton>
                            <Link href={subnav.url}>
                              <p className="text-white">{subnav.title}</p>
                              <p className="text-[#858894] font-normal text-base">
                                {subnav.des}
                              </p>
                            </Link>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  {nav.grandChild2 && (
                    <>
                      <div className="my-7 h-[1px] w-auto -mx-5 bg-line"></div>
                      <div className="flex gap-3 items-center mb-5">
                        <Image
                          src={nav?.grandChild?.logo}
                          width={30}
                          height={30}
                          alt="Banner"
                        />
                        <p className="text-white">{nav?.grandChild?.title}</p>
                      </div>
                      {nav?.grandChild2?.menuItem?.map((subnav, i) => (
                        <List key={i} component="div" disablePadding>
                          <ListItem className="px-3 py-3 rounded-xl border border-transparent hover:border-line hover:bg-[#151118] w-full">
                            <ListItemButton>
                              <Link href={subnav.url}>
                                <p className="text-white">{subnav.title}</p>
                                <p className="text-[#858894] font-normal text-base">
                                  {subnav.des}
                                </p>
                              </Link>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      ))}
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {nav.grandChild3 && (
                    <>
                      <div className="my-7 h-[1px] w-auto -mx-5 bg-line"></div>
                      <div className="flex gap-3 items-center mb-5">
                        <Image
                          src={nav?.grandChild3?.icon}
                          width={30}
                          height={30}
                          alt="Banner"
                        />
                        <p className="text-white">{nav?.grandChild?.title}</p>
                      </div>
                      {nav?.grandChild3?.menuItem?.map((subnav, i) => (
                        <List key={i} component="div" disablePadding>
                          <ListItem className="px-3 py-3 rounded-xl border border-transparent hover:border-line hover:bg-[#151118] w-full">
                            <ListItemButton>
                              <Link href={subnav.url}>
                                <p className="text-white">{subnav.title}</p>
                                <p className="text-[#858894] font-normal text-base">
                                  {subnav.des}
                                </p>
                              </Link>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </List>
    </NavSideBarContainer>
  );
};
export default NavSideBar;
