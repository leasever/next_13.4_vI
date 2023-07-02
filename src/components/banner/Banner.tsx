import { imageLoader } from "@/app/layout";
import Image from "next/image";
import { FC } from "react";

interface BannerProps {
  url: string;
}

export const Banner: FC<BannerProps> = ({ url }) => {
  return (
    <>
      <Image
        loader={imageLoader}
        src={`/${url}`}
        width={1440}
        height={630}
        alt={url}
        priority={true}
      />
    </>
  );
};
