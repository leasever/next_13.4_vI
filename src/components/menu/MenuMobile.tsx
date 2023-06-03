import { Category } from "@/models/category.model";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const links = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "Nosotros", url: "/about" },
  { id: 3, name: "Categorías", subMenu: true },
  { id: 4, name: "Contacto", url: "/contact" },
];

interface Props {
  data: Category[];
  toggleMobileMenu: () => void;
}

const MenuMobile = ({ data, toggleMobileMenu }: Props) => {
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[100px] left-0 w-full h-[cal(100vh-50px)] bg-white border-t text-black ">
      {links.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {data.map(({ attributes: category, id }: any) => {
                      return (
                        <Link
                          key={id}
                          href={`/catalogue/category/${category.slug}/1`}
                        >
                          <li
                            className="py-4 px-8 border-t flex justify-between"
                            onClick={() => {
                              setShowCatMenu(false);
                              toggleMobileMenu();
                            }}
                          >
                            {category.name}
                            <span className="opacity-50 text-sm">{`(${category.products.data.length})`}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <Link href={`${item?.url}`} onClick={() => toggleMobileMenu()}>
                <li className="py-4 px-5 border-b">{item.name}</li>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
