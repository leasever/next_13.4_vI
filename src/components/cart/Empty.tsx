import Image from "next/image";
import Link from "next/link";

const Empty = () => {
  return (
    <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-20">
      <Image
        src="/empty-cart.jpg"
        width={400}
        height={300}
        alt="Carrito vacío"
      />

      <span className="text-xl font-bold mt-5">Tu carrito esta vacío</span>

      <span className="text-center mt-4">
        Parece que no has añadido nada a tu carrito. Continúe y explore las
        categorías principales.
      </span>

      <Link
        href="/catalogue/categories"
        className="  px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
      >
        Seguir comprando
      </Link>
    </div>
  );
};

export default Empty;
