import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

interface BannerProps {
  url: string;
}

export const Banner: FC<BannerProps> = ({ url }) => {
  return (
    <div className="relative w-full max-h-[630px]">
      <Image
        src={`/${url}`}
        width={1440}
        height={630}
        alt={url}
        priority={true}
      />
    </div>
  );
};
