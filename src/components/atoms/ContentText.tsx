import TextRectangle from './TextRectangle';

export const ContentText = () => (
  <div className="relative flex flex-col sm:text-center">
    <div className="matrix-[1,0,0,1,0,0] bg-orange absolute top-28 left-80 z-1 hidden w-0 transform lg:top-22 lg:left-40 lg:block lg:h-16 xl:left-70 2xl:left-70">
      <TextRectangle />
    </div>
    <h1 className="font-popins text-orange mb-3 text-xl font-bold">
      BEST DESTINATIONS AROUND THE WORLD
    </h1>
    <h2 className="font-volkhov text-content-title text-6xl font-bold lg:text-6xl">
      Travel, enjoy
      <br /> and live a new and full life
    </h2>
    <p className="font-popins text-text-color mt-4 text-base font-medium">
      Built Wicket longer admire do barton vanity itself do in it. Preferred to
      sportsmen it engrossed listening. Park gate sell they west hard for the.
    </p>
  </div>
);
