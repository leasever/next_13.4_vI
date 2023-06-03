import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";

const Empty = () => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return (
    <Wrapper className=" pt-10 ">
      <div className="flex-[2] flex flex-col items-center   gap-3">
        <div className="w-[260px] h-[260px]">
          <Image
            src="/empty-cart.png"
            width={250}
            height={250}
            alt="empty cart"
            priority={true}
          />
        </div>
        <span className="text-xl font-bold">Tu carrito esta vacío</span>
        <span className="text-center">
          Parece que no has añadido nada a tu carrito.
          <br />
          Continúe y explore las categorías principales.
        </span>
        <Link href="/catalogue/categories">
          <div className="py-4 px-8 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75">
            <p>Seguir comprando</p>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Empty;
