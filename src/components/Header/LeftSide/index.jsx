import { ArrowDown } from "@/assets/icon/ArrowDown";
import { navList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Item,
  ItemArrow,
  ItemHeader,
  LeftSide,
  ListSubMenu,
  NavItem,
  SubDesc,
  SubMenu,
  SubTitle,
} from "./styles";

const Header = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClickMenu = (nav, index) => {
    if (nav?.grandChild) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <LeftSide>
      {navList.map((nav, index) => {
        return (
          <NavItem key={nav?.name}>
            <ItemHeader onClick={() => handleClickMenu(nav, index)}>
              <Item>{nav?.name}</Item>
              <ItemArrow className="w-3 h-3 text-white">
                <ArrowDown />
              </ItemArrow>
              {openIndex === index && (
                <>
                  <div
                    className="w-full h-full fixed left-0 top-0 -z-10 px-10 py-5"
                    onClick={() => handleClickMenu(nav, index)}
                  ></div>
                  <SubMenu>
                    <div className="flex justify-between  min-h-[400px] rounded-lg px-7 py-5 min-w-max">
                      <div className="max-w-[500px]">
                        <div className="flex gap-3 items-center mb-5 ">
                          <Image
                            src={nav?.grandChild?.logo}
                            width={30}
                            height={30}
                            alt="Banner"
                          />
                          <p className="text-white ">
                            {nav?.grandChild?.title}
                          </p>
                        </div>
                        {index === 1 ? (
                          <p className="text-white font-bold text-lg w-[300px]">
                            Coming Soon
                          </p>
                        ) : (
                          <ul className="flex flex-col gap-5">
                            {nav?.grandChild?.sub.map((subItem, i) => {
                              return (
                                <ListSubMenu key={i}>
                                  <Link
                                    key={i}
                                    href={subItem.url}
                                    className="flex flex-col items-start gap-1"
                                  >
                                    <SubTitle>{subItem?.title}</SubTitle>
                                    {subItem?.des && (
                                      <SubDesc>{subItem?.des}</SubDesc>
                                    )}
                                  </Link>
                                </ListSubMenu>
                              );
                            })}
                          </ul>
                        )}
                      </div>

                      {nav.grandChild2 && (
                        <>
                          <div className="lg:mx-10 mx-5 h-auto w-[1px] -my-5 bg-line"></div>
                          <div>
                            <div className="flex gap-3 items-center mb-5 z-30 min-w-max">
                              <Image
                                src={nav?.grandChild2?.icon}
                                width={30}
                                height={30}
                                alt="Banner"
                              />
                              <p className="text-white ">
                                {nav?.grandChild2?.title}
                              </p>
                            </div>
                            <ul className="flex flex-col gap-5 max-w-[300px]">
                              {nav?.grandChild2?.menuItem?.map((subItem, i) => {
                                return (
                                  <ListSubMenu key={i}>
                                    <Link
                                      key={i}
                                      href={subItem.url}
                                      className="flex flex-col items-start gap-3"
                                    >
                                      <SubTitle>{subItem?.title}</SubTitle>
                                      {subItem?.des && (
                                        <SubDesc>{subItem?.des}</SubDesc>
                                      )}
                                    </Link>
                                  </ListSubMenu>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                    {nav?.grandChild3 && (
                      <div className="w-full px-10 py-5 border-t-[1px] border-line ">
                        <div className="flex gap-3 items-center mb-5 ">
                          <Image
                            src={nav?.grandChild3?.icon}
                            width={30}
                            height={30}
                            alt="Banner"
                          />
                          <p className="text-white">
                            {nav?.grandChild3?.title}
                          </p>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
                          {nav?.grandChild3?.menuItem.map((subItem, i) => {
                            return (
                              <ListSubMenu key={i}>
                                <Link
                                  key={i}
                                  href={subItem.url}
                                  className="flex flex-col items-start gap-3"
                                >
                                  <SubTitle>{subItem?.title}</SubTitle>
                                  {subItem?.des && (
                                    <SubDesc>{subItem?.des}</SubDesc>
                                  )}
                                </Link>
                              </ListSubMenu>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </SubMenu>
                </>
              )}
            </ItemHeader>
          </NavItem>
        );
      })}
    </LeftSide>
  );
};

export default Header;
