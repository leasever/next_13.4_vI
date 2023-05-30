import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper className=" py-10 ">
      <div className="flex-[2] flex flex-col items-center   gap-3">
        <div className="w-[260px] h-[260px]">
          <Image
            src="/404.png"
            width={250}
            height={250}
            alt="perdido"
          />
        </div>
        <span className="text-xl font-bold">Lo siento</span>
        <span className="text-center">
          Parece que la página o el producto no existe.
          <br />
          Continúe y explore las categorías principales.
        </span>
        <Link href="/home">
          <div className="py-4 px-8 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75">
            <p>Regresar</p>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
}
