import Image from "next/image";
import { FC } from "react";

interface BannerProps {
  url: string;
}

export const Banner: FC<BannerProps> = ({ url }) => (
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
);
