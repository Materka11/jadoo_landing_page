import { ITestimonial, Testimonial } from '../atoms/Testimonial';
import Avatar from '../../assets/image/Avatar.webp';

export const Testimonials = () => {
  const TESTIMONIAL: ITestimonial = {
    avatar: Avatar,
    content:
      '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    name: 'Mike Taylor',
    subname: 'Lahore, Pakistan',
  };
  return (
    <section>
      <Testimonial {...TESTIMONIAL} />
    </section>
  );
};
