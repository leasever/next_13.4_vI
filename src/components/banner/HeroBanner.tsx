"use client";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Banner from "./Banner";
import { dataImages } from "./data";

interface Image {
  id: number;
  url: string;
}

const images: Image[] = dataImages;

const HeroBanner: FC = () => {
  const renderArrow = (
    clickHandle: () => void,
    className: string,
    iconClassName: string
  ) => (
    <div
      onClick={clickHandle}
      className={`absolute right-0 bottom-20 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 ${className}`}
    >
      <BiArrowBack className={`text-sm md:text-lg ${iconClassName}`} />
    </div>
  );

  return (
    <div className="relative text-white text-[20px] w-full  max-w-[1440px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandle, hasPrev) =>
          renderArrow(clickHandle, "right-[31px] md:right-[51px]", "")
        }
        renderArrowNext={(clickHandle, hasPrev) =>
          renderArrow(clickHandle, "", "rotate-180")
        }
      >
        {images.map((image) => (
          <Banner url={image.url} key={image.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;

