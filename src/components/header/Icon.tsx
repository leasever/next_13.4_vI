import { RootState } from "@/store/store";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

const Icons = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { quotationItems } = useSelector((state: RootState) => state.quotation);

  const icons = [
    {
      link: "/quotation",
      state: quotationItems.length,
      icon: <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />,
    },
    {
      link: "/cart",
      state: cartItems.length,
      icon: <BsCart className="text-[19px] md:text-[24px]" />,
    },
  ];

  return (
    <>
      {icons.map(
        (icon, index) =>
          icon.state > 0 && (
            <div key={index}>
              <Link href={icon.link}>
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                  {icon.icon}
                  <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    {icon.state}
                  </div>
                </div>
              </Link>
            </div>
          )
      )}
    </>
  );
};

export default Icons;
