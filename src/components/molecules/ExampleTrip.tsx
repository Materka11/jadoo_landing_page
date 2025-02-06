import { TripPost } from '../atoms/TripPost';
import PostImage from '../../assets/image/PostImage.webp';
import { LeafIcon } from '../atoms/LeafIcon';
import { MapIcon } from '../atoms/MapIcon';
import { SendIcon } from '../atoms/SendIcon';
import { TripProgress } from '../atoms/TripProgress';
import ProfileProgress from '../../assets/image/ProfileProgress.webp';

export const ExampleTrip = () => {
  const OPTIONS = [LeafIcon, MapIcon, SendIcon];

  return (
    <div className="relative w-fit">
      <TripPost
        description="14 - 29 June | by Robbin Johnosson"
        title="Trip To Greece"
        peopleNum={24}
        img={PostImage}
        options={OPTIONS}
        styles="z-10"
      />
      <TripProgress
        img={ProfileProgress}
        label="Ongoing"
        sublabel="Trip to rome"
        progress={40}
        styles="absolute top-[55%] right-0 translate-x-[45%] z-20"
      />

      <div className="absolute top-0 right-0 z-0 h-[367px] w-[354px] -translate-y-1/10 translate-x-1/10 rounded-full bg-[#59B1E6] opacity-40 blur-3xl" />
    </div>
  );
};
