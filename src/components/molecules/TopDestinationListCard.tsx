import { motion } from 'framer-motion';
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
    <motion.div
      className="relative z-0 flex h-full w-full gap-3"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {destinations?.map((destination) => (
        <TopDestinationsCard key={destination.id} {...destination} />
      ))}

      <motion.img
        className="absolute top-16 right-6 -z-1 h-1/2 w-24"
        src="src/assets/image/topSellingBgImage.webp"
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  );
};
