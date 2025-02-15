import { ContentText } from '../atoms/ContentText';
import { PlayDemo } from '../atoms/PlayDemo';
import { RectangleButton } from '../atoms/RectangleButton';

export const TextAndButtons = () => {
  return (
    <div className="flex flex-col sm:mb-3 sm:items-center sm:justify-center lg:mt-26 lg:ml-20 lg:h-1/2 lg:w-1/2">
      <div>
        <ContentText />
      </div>
      <div className="mt-10 flex gap-8 sm:w-full lg:gap-14">
        <RectangleButton
          color="bg-orange-button"
          label="Find out more"
          href="/"
        />
        <PlayDemo />
      </div>
    </div>
  );
};
