import { PlaneImage } from './PlaneImage';

export const MainContentImage = () => (
  <div className="relative h-1/2 w-1/3">
    <PlaneImage className="absolute top-36 right-100 z-1 h-36 w-36" />
    <img
      src="src\components\atoms\traveller.webp"
      className="h-3xl absolute top-28 right-16 z-2 w-3xl"
    />
    <PlaneImage className="absolute top-46 right-8 z-1 h-36 w-36" />
  </div>
);
