'use client'
import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

interface BannerProps {
  url: string;
}

export const Banner: FC<BannerProps> = ({ url }) => {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 500}`;
  };
  return (
    <div className="relative w-full max-h-[630px]">
      <Image
        loader={imageLoader}
        src={`/${url}`}
        width={1440}
        height={630}
        alt={url}
      />
    </div>
  );
};
