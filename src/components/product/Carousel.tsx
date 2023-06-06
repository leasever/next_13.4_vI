import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

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
      <div className="w-full  mx-auto sticky top-[50px]">
        <Image
          src="/sin_imagen.jpg"
          width={520}
          height={650}
          alt="Imagen no disponible"
        />
      </div>
    );
  }

  return (
    <div className="w-full  mx-auto sticky top-[50px]">
      <Carousel
        showIndicators={false}
        showStatus={false}
        animationHandler="fade"
        thumbWidth={50}
        className="productCarousel"
        renderThumbs={() =>
          data.map((img, idx) => (
            <Image
              key={idx}
              src={img.attributes.url}
              width={50}
              height={60}
              alt={img.attributes.name}
            />
          ))
        }
      >
        {data.map((img, idx) => (
          <div
            className="w-full h-full max-w-[520px] max-h-[650px] bg-white"
            key={idx}
          >
            <Image
              src={img.attributes.url}
              alt={`${img.attributes.name} preview ${idx}`}
              width={520}
              height={650}
              priority={true}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
