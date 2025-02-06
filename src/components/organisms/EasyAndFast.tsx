import { Headers } from '../atoms/Headers';
import { TripPost } from '../atoms/TripPost';
import PostImage from '../../assets/image/PostImage.webp';
import { LeafIcon } from '../atoms/LeafIcon';
import { MapIcon } from '../atoms/MapIcon';
import { SendIcon } from '../atoms/SendIcon';

export const EasyAndFast = () => {
  const OPTIONS = [LeafIcon, MapIcon, SendIcon];

  return (
    <section>
      <Headers
        label={'Easy and Fast'}
        sublabel={'Book Your Next Trip In 3 Easy Steps'}
        labelStyles={'font-[600] text-lg text-text-color'}
        sublabelStyles={'font-bold text-5xl text-deepblue font-volkhov'}
        sectionStyles="max-w-[500px] gap-4"
      />
      <TripPost
        description="14 - 29 June | by Robbin Johnosson"
        title="Trip To Greece"
        peopleNum={24}
        photo={PostImage}
        options={OPTIONS}
      />
    </section>
  );
};
