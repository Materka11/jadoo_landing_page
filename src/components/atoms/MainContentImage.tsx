import travellerImage from '../../assets/image/traveller.webp';
import { PlaneImage } from './PlaneImage';

export const MainContentImage = () => (
  <div className="relative hidden sm:top-10 sm:mr-14 sm:flex sm:h-[485px] sm:w-[485px] lg:mr-8 lg:flex lg:h-[565px] lg:w-[564px] xl:mr-2 xl:flex xl:h-[765px] xl:w-[764px] 2xl:mr-0 2xl:flex 2xl:h-[765px] 2xl:w-[764px]">
    <PlaneImage className="absolute z-1 sm:hidden lg:top-12 lg:right-60 lg:block lg:h-36 lg:w-36 xl:right-100 xl:block 2xl:block" />
    <img
      src={travellerImage}
      alt="Traveller"
      className="absolute z-2 aspect-square lg:right-2"
      loading="lazy"
    />
    <PlaneImage className="absolute z-1 sm:hidden lg:top-24 lg:right-2 lg:block lg:h-36 lg:w-36 xl:block 2xl:block" />
  </div>
);
