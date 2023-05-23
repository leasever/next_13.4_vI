import Image from "next/image";

interface Props {
  id?: number;
  url: string;
}

export default function Banner({ id, url }: Props) {
  return (
    <div>
      <div className="aspect-[16/7]  ">
        <Image
          src={`/${url}`}
          alt={`${url}`}
          width={1440}
          height={595}
          priority
        />
        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">
          COMPRAR
        </div>
      </div>
    </div>
  );
}
