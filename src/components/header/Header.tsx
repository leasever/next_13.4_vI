"use client";

import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";

import Menu from "../menu/Menu";

import { Categories } from "@/models/category.model";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "../menu/MenuMobile";
import Icons from "./Icon";
import Logo from "./Logo";

const   Header = ({ data, meta }: Categories) => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[100px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[100px] bg-[#ECCD15] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[100px] flex justify-between items-center">
        {Logo()}

        <Menu data={data} meta={meta} />

        {mobileMenu && <MenuMobile data={data} meta={meta} />}

        <div className="flex items-center gap-2 text-black">
          {Icons()}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
