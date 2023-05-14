import { getCategories } from "@/app/catalogue/services";
import { Categories, Category } from "@/models/category.model";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function SubMenu() {
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
    <>
      <li
        className="cursor-pointer flex items-center gap-2 relative"
        onMouseEnter={() => setShowCatMenu(true)}
        onMouseLeave={() => setShowCatMenu(false)}
      >
        {"Category"}
        <BsChevronDown size={14} />
        {showCatMenu && (
          <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
            {categories?.data.map(({ attributes: category, id }: Category) => {
              return (
                <Link
                  key={id}
                  href={`/category/${category.slug}`}
                  onClick={() => setShowCatMenu(false)}
                >
                  <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                    {category.name}
                    <span className="opacity-50 text-sm">{`(${category.products.data.length})`}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
}
