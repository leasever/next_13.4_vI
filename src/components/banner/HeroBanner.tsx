"use client";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { Banner } from "./Banner";

interface PropsHeroBanner {
  data: PropsImg[];
}
interface PropsImg {
  id: number;
  url: string;
}

const HeroBanner: FC<PropsHeroBanner> = ({ data }) => {
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
    <div className="relative aspect-[16/7] text-white  text-[20px] max-w-[1440px] max-h-[630px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        animationHandler="fade"
        renderArrowPrev={(clickHandle, hasPrev) =>
          renderArrow(clickHandle, "right-[31px] md:right-[51px]", "")
        }
        renderArrowNext={(clickHandle, hasPrev) =>
          renderArrow(clickHandle, "", "rotate-180")
        }
        renderIndicator={() => null}
        swipeable={false}
        emulateTouch={false}
        dynamicHeight={false}
        centerMode={false}
      >
        {data.map((image) => (
          <div className="w-full max-h-[630px]" key={image.id}>
            <Banner url={image.url}  />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
