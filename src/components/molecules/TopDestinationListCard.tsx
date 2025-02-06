import {
  ITopDestinationsCardProps,
  TopDestinationsCard,
} from '../atoms/TopDestinationsCard';

export interface IDestinationsProps {
  destinations: ITopDestinationsCardProps[];
}
export const TopDestinationListCard = ({
  destinations,
}: IDestinationsProps) => {
  return (
    <div className="flex h-full w-full gap-3">
      {destinations?.map((destination) => (
        <TopDestinationsCard key={destination.id} {...destination} />
      ))}
    </div>
  );
};
