import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ITestimonial, Testimonial } from '../atoms/Testimonial';
import Avatar from '../../assets/image/Avatar.webp';
import { ChevronTop } from '../atoms/ChevronTop';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';

export const VerticalSlider = () => {
  const swiperRef = useRef<SwiperType>();

  const TESTIMONIALS: ITestimonial[] = [
    {
      avatar: Avatar,
      content:
        '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
      name: 'Mike Taylor',
      subname: 'Lahore, Pakistan',
    },
    {
      avatar: Avatar,
      content:
        '“The service was exceptional and the team was very professional. I would highly recommend them to anyone looking for quality work.”',
      name: 'Sarah Johnson',
      subname: 'New York, USA',
    },
    {
      avatar: Avatar,
      content:
        '“I was amazed by the attention to detail and the quick turnaround time. Truly a great experience!”',
      name: 'David Smith',
      subname: 'London, UK',
    },
    {
      avatar: Avatar,
      content:
        '“Fantastic communication and delivery. They really understand what the client needs.”',
      name: 'Emily Davis',
      subname: 'Sydney, Australia',
    },
  ];

  return (
    <div className="flex h-[400px] w-[669px] items-center justify-center">
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
          swiperRef.current = swiper;
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
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer"
        >
          <ChevronTop className="h-4 w-4 text-[#3E2E4D]" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer"
        >
          <ChevronTop className="h-4 w-4 rotate-180 text-[#3E2E4D]" />
        </button>
      </div>
    </div>
  );
};
