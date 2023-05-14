import { getCategories } from "@/app/catalogue/services";
import { Categories } from "@/models/category.model";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [categories, setCategories] = useState<Categories>();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[cal(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
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
                    {categories?.data.map(
                      ({ attributes: category, id }: any) => {
                        return (
                          <Link
                            key={id}
                            href={`/category/${category.slug}`}
                            onClick={() => {
                              setShowCatMenu(false);
                              setMobileMenu(false);
                            }}
                          >
                            <li className="py-4 px-8 border-t flex justify-between">
                              {category.name}
                              <span className="opacity-50 text-sm">{`(${category.products.data.length})`}</span>
                            </li>
                          </Link>
                        );
                      }
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <Link href={`${item?.url}`} onClick={() => setMobileMenu(false)}>
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
