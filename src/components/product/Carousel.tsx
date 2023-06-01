import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  return (
    <div className="w-full  mx-auto sticky top-[50px]">
      <Carousel
        showIndicators={false}
        showStatus={false}
        thumbWidth={50}
        className="productCarousel"
        renderThumbs={() =>
          data.map((img, idx) => (
            <div key={idx} className=" relative w-[50px] h-[60px]">
              <Image
                src={img.attributes.url}
                width={50}
                height={60}
                alt={img.attributes.name}
              />
            </div>
          ))
        }
      >
        {data.map((img, idx) => (
          <div className="max-w-[520px] max-h-[650px]" key={idx}>
            <Image
              src={img.attributes.url}
              alt={`${img.attributes.name} preview ${idx}`}
              width={520}
              height={650}
              priority={idx === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
