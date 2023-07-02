"use client";

import { Category } from "@/models/categories.model";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Wrapper from "../Wrapper";
import Menu from "../menu/Menu";
import MenuMobile from "../menu/MenuMobile";
import Icons from "./Icon";
import Logo from "./Logo";

interface PropsHeader {
  data: Category[];
}

const Header = ({ data }: PropsHeader) => {
  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollY = window.scrollY;

      if (scrollY > 80) {
        if (scrollY > lastScrollY && !mobileMenu) {
          setShow("-translate-y-[100px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header
      className={`w-full h-[100px] flex items-center justify-between z-[9999] sticky top-0 transition-all duration-300 bg-[#EFEFEF] bg-opacity-50 backdrop-filter backdrop-blur-md ${show}`}
    >
      <Wrapper className="h-[100px] flex justify-between items-center  ">
        <div className="aspect-[16/7]">{Logo()}</div>

        <Menu data={data} />

        {mobileMenu && (
          <MenuMobile data={data} toggleMobileMenu={toggleMobileMenu} />
        )}

        <div className="flex items-center gap-2 text-black">
          {Icons()}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[24px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[24px]"
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
