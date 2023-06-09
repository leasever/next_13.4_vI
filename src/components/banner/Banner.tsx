import Image from "next/image";
import { FC } from "react";

interface BannerProps {
  url: string;
}

export const Banner: FC<BannerProps> = ({ url }) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div className="relative w-full max-h-[630px]">
      <Image
        src={`/${url}`}
        alt={url}
        width={1440}
        height={630}
        priority={true}
        loader={imageLoader}
      />
    </div>
  );
};
