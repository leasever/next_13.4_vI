import { Categories } from "@/models/category.model";
import Link from "next/link";
import React from "react";
import SubMenu from "./SubMenu";

const linkData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = ({ data, meta }: Categories) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {linkData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <SubMenu data={data} meta={meta} />
            ) : (
              <li className="cursor-pointer ">
                <Link href={`${item.url}`}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
