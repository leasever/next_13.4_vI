import Image from "next/image";

interface Props {
  id?: number;
  url: string;
}

export default function Banner({ id, url }: Props) {
  const bottomSpacing = id ? "[75px]" : "[25px]";
  const textFontSize = id ? "[30px]" : "[15px]";

  return (
    <>
      <Image
        src={`/${url}`}
        alt={url}
        width={1440}
        height={630}
        priority={true}
      />
      <div
        className={`px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-${bottomSpacing} left-0 text-black/[0.9] text-${textFontSize} uppercase font-medium cursor-pointer hover:opacity-90`}
      >
        COMPRAR
      </div>
    </>
  );
}
