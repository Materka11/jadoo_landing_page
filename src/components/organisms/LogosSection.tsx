import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from 'react';
import { IImage, IMAGES } from '../../data/images';

export const LogosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = IMAGES.length;
  const centerIndex = Math.floor(3 / 2);

  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      autoplay={{
        delay: 5,
        disableOnInteraction: false,
      }}
      speed={7000}
      modules={[Autoplay]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="flex w-full items-center justify-center"
    >
      {IMAGES.map(({ alt, id, url }: IImage, index) => {
        const isCenter = index === (activeIndex + centerIndex) % totalSlides;

        return (
          <SwiperSlide key={id} className="flex items-center justify-center">
            <div
              className={`relative flex items-center justify-center transition-all duration-500 ${isCenter ? 'scale-125 shadow-xl shadow-gray-800/50' : 'scale-90'} `}
            >
              <img
                src={url}
                alt={alt}
                className={`aspect-square h-20 w-auto max-w-20 object-contain transition-all duration-500 md:h-24 md:max-w-28 lg:h-24 lg:max-w-32 xl:h-28 xl:max-w-[120px] 2xl:h-32 2xl:max-w-[140px] ${isCenter ? 'grayscale-0' : 'grayscale'} `}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
