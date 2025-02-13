import { DESTINATIONS } from '../../data/destinations';
import { TopSellingText } from '../atoms/TopSellingText';
import { TopDestinationListCard } from '../molecules/TopDestinationListCard';

export const TopSelling = () => {
  return (
    <div className="fles mt-6 flex-col items-center justify-center">
      <TopSellingText />
      <TopDestinationListCard destinations={DESTINATIONS} />
    </div>
  );
};
