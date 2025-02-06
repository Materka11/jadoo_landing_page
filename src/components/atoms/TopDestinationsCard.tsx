import { motion } from 'framer-motion';
import { convertDaysToDay } from '../../helpers/ConvertDaysToDay';

export interface ITopDestinationsCardProps {
  url: string;
  location: string;
  price: string;
  duration: string;
}

export const TopDestinationsCard = ({
  url,
  duration,
  location,
  price,
}: ITopDestinationsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative flex h-[451px] w-1/3 cursor-pointer flex-col items-center justify-end overflow-hidden rounded-xl"
    >
      <motion.img
        src={url}
        className="absolute z-0 h-full w-full p-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-opacity-50 z-10 flex h-1/5 w-4/6 flex-col gap-3 rounded-lg p-3"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-popins text-blueGray text-lg font-medium">
            {location}
          </h3>
          <p className="font-popins text-blueGray text-lg font-medium">
            {price}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src="src/assets/image/cursorVector.webp" />
          <p className="font-popins text-blueGray text-base font-medium">
            {duration} {convertDaysToDay(duration)} Trip
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
