import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { ITestimonial, Testimonial } from '../atoms/Testimonial';
import Avatar from '../../assets/image/Avatar.webp';

export const VerticalSlider = () => {
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
    <Swiper
      direction="vertical"
      spaceBetween={0}
      slidesPerView={'auto'}
      modules={[Navigation]}
      navigation
      className="h-[356px] w-[669px]"
      centeredSlides
    >
      {TESTIMONIALS.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <div className="opacity-80 hover:opacity-100">
            <Testimonial {...testimonial} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
