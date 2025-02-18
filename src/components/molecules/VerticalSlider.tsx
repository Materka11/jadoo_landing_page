import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ITestimonial, Testimonial } from '../atoms/Testimonial';
import Avatar from '../../assets/image/Avatar.webp';
import { ChevronTop } from '../atoms/ChevronTop';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export const VerticalSlider = () => {
  const swiperRefDesktop = useRef<SwiperType>();
  const swiperRefMobile = useRef<SwiperType>();
  const { t } = useTranslation();

  const TESTIMONIALS: ITestimonial[] = [
    {
      avatar: Avatar,
      content: t('testimonials_content1'),
      name: t('testimonials_name1'),
      subname: t('testimonials_subname1'),
    },
    {
      avatar: Avatar,
      content: t('testimonials_content2'),
      name: t('testimonials_name2'),
      subname: t('testimonials_subname2'),
    },
    {
      avatar: Avatar,
      content: t('testimonials_content3'),
      name: t('testimonials_name3'),
      subname: t('testimonials_subname3'),
    },
    {
      avatar: Avatar,
      content: t('testimonials_content4'),
      name: t('testimonials_name4'),
      subname: t('testimonials_subname4'),
    },
  ];

  return (
    <>
      <div className="hidden h-[400px] w-[669px] items-center justify-center lg:flex">
        <Swiper
          direction="vertical"
          modules={[Navigation, EffectCreative]}
          effect="creative"
          loop
          creativeEffect={{
            prev: {
              translate: [66, 80, 0],
              rotate: [0, 0, 0],
            },
            next: {
              translate: [66, 80, 0],
              rotate: [0, 0, 0],
            },
          }}
          className="h-full w-full"
          onBeforeInit={(swiper) => {
            swiperRefDesktop.current = swiper;
          }}
          slidesPerView={1}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              {({ isActive, isPrev, isNext }) => (
                <div className="p-8">
                  <Testimonial
                    {...testimonial}
                    className={` ${isActive ? 'border-none shadow-xl' : ''} ${isPrev || isNext ? 'border-2 border-[#F7F7F7]' : ''}`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex h-18 flex-col items-center justify-between">
          <button
            onClick={() => swiperRefDesktop.current?.slidePrev()}
            className="cursor-pointer"
            aria-label="chevron left"
          >
            <ChevronTop className="h-4 w-4 text-[#3E2E4D]" />
          </button>

          <button
            onClick={() => swiperRefDesktop.current?.slideNext()}
            className="cursor-pointer"
            aria-label="chevron right"
          >
            <ChevronTop className="h-4 w-4 rotate-180 text-[#3E2E4D]" />
          </button>
        </div>
      </div>

      {/* Mobile version */}
      <div className="relative lg:hidden">
        <Swiper
          modules={[Navigation]}
          loop
          onBeforeInit={(swiper) => {
            swiperRefMobile.current = swiper;
          }}
          slidesPerView={1}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="flex items-center justify-center p-8">
                <Testimonial {...testimonial} className="shadow-xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 left-0 z-10 flex w-full -translate-y-1/2 items-center justify-between">
          <button
            onClick={() => swiperRefMobile.current?.slidePrev()}
            className="cursor-pointer"
            aria-label="chevron left"
          >
            <ChevronTop className="h-4 w-4 -rotate-90 text-[#3E2E4D]" />
          </button>

          <button
            onClick={() => swiperRefMobile.current?.slideNext()}
            className="cursor-pointer"
            aria-label="chevron right"
          >
            <ChevronTop className="h-4 w-4 rotate-90 text-[#3E2E4D]" />
          </button>
        </div>
      </div>
    </>
  );
};
