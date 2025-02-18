import { motion } from 'framer-motion';
import topSellingBgImage from '../../assets/image/topSellingBgImage.webp';
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
      className="relative z-0 flex h-full w-full flex-col items-center justify-center gap-3 lg:flex-row xl:flex-row 2xl:flex-row"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {destinations?.map((destination) => (
        <TopDestinationsCard key={destination.id} {...destination} />
      ))}

      <motion.img
        className="absolute top-16 right-6 -z-1 hidden aspect-[1/2] h-1/2 w-24 items-center justify-center lg:block"
        src={topSellingBgImage}
        alt="Top Selling Background"
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        loading="lazy"
      />
    </motion.div>
  );
};
