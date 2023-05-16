"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import Banner from "./Banner";
import { dataImages } from "./data";

function HeroBanner() {
  const images = dataImages;
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandle, hasPrev) => (
          <div
            onClick={clickHandle}
            className="absolute right-[31px] md:right-[51px] bottom-[287px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandle, hasPrev) => (
          <div
            onClick={clickHandle}
            className="absolute right-0 bottom-[287px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {images.map((image) => (
          <Banner url={image.url} key={image.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroBanner;
