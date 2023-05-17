import Image from "next/image";
import Link from "next/link";

const Empty = () => {
  return (
    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
      <Image
        src="/empty-cart.jpg"
        width={300}
        height={300}
        className="w-[300px] md:w-[400px]"
        alt="Carrito vacío"
        priority
      />

      <span className="text-xl font-bold">Tu carrito esta vacío</span>

      <span className="text-center mt-4">
        Parece que no has añadido nada a tu carrito. Continúe y explore las
        categorías principales.
      </span>

      <Link
        href="/catalogue/categories"
        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default Empty;
