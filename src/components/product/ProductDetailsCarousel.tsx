import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface CarouselCard {
  id: number;
  attributes: Data;
}
interface Data {
  url: string;
  name: string;
}

interface Props {
  data: CarouselCard[];
}

const ProductDetailsCarousel = ({ data }: Props) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {data?.map((img: CarouselCard) => (
          <div className="aspect-[16/7]" key={img.id}>
            <img
              src={img.attributes.url}
              alt={img.attributes.name}
              loading="eager"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
