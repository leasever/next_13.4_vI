import { Categories, Category } from "@/models/category.model";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  data: Category[];
}

export default function SubMenu({ data }: Props) {
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <>
      <li
        className="cursor-pointer flex items-center gap-2 relative"
        onMouseEnter={() => setShowCatMenu(true)}
        onMouseLeave={() => setShowCatMenu(false)}
      >
        {"Categorías"}
        <BsChevronDown size={14} />
        {showCatMenu && (
          <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg ">
            {data.map(({ attributes: category, id }: Category) => {
              return (
                <Link
                  key={id}
                  href={`/catalogue/category/${category.slug}/1`}
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
