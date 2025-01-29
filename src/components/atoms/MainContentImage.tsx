import { PlaneImage } from './PlaneImage';

export const MainContentImage = () => (
  <div className="relative">
    <PlaneImage className="absolute top-36 right-120 z-1" />
    <img
      src="src\components\atoms\traveller.png"
      className="h-3xl absolute top-28 right-16 z-2 w-3xl"
    />
    <PlaneImage className="absolute top-54 right-16 z-1" />
  </div>
);
