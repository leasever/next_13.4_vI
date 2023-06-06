import Image from "next/image";

interface Props {
  url: string;
}

export default function Banner({ url }: Props) {
  return (
    <>
      <div className="relative w-full max-h-[630px]">
        <Image
          src={`/${url}`}
          alt={url}
          width={1440}
          height={630}
          quality={100}
          priority={true}
        />
      </div>
    </>
  );
}
