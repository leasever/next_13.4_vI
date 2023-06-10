"use client";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import NextImage from "next/image";
import { imageLoader } from "@/app/layout";

interface CarouselCard {
  id: number;
  attributes: {
    url: string;
    name: string;
  };
}

interface Props {
  data: CarouselCard[];
}

const ProductDetailsCarousel: FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <div className="w-full md:w-auto flex-[1.5] max-w-[520px] mx-auto lg:mx-0">
        <div className="w-full  mx-auto sticky top-[50px]">
          <NextImage
            src="/sin_imagen.jpg"
            width={520}
            height={650}
            alt="Imagen no disponible"
          />
        </div>
      </div>
    );
  }

  const imageUrls = data.map((img) => img.attributes.url);

  return (
    <div className="w-full  flex-[1.5] max-w-[520px] mx-auto lg:mx-0">
      <div className="w-full  mx-auto sticky top-[50px]">
        <Carousel
          showIndicators={false}
          showStatus={false}
          animationHandler="fade"
          thumbWidth={50}
          className="productCarousel"
          renderThumbs={() =>
            imageUrls.map((url, idx) => (
              <NextImage
                key={idx}
                src={url}
                width={50}
                height={60}
                alt={`Thumbnail ${idx}`}
              />
            ))
          }
        >
          {data.map((img, idx) => (
            <div className="w-full h-full  max-h-[650px] bg-white" key={idx}>
              <NextImage
                priority={true}
                loader={imageLoader}
                src={img.attributes.url}
                width={520}
                height={650}
                alt={`${img.attributes.name} preview ${idx}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
