import { motion } from 'framer-motion';
import { convertDaysToDay } from '../../helpers/convertDaysToDay';
import cursorVector from '../../assets/image/cursorVector.webp';
import { useTranslation } from 'react-i18next';

export interface ITopDestinationsCardProps {
  id: number;
  url: string;
  location: string;
  price: string;
  duration: string;
}

export const TopDestinationsCard = ({
  id,
  url,
  duration,
  location,
  price,
}: ITopDestinationsCardProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative flex h-[551px] w-full cursor-pointer flex-col items-center justify-end overflow-hidden rounded-xl md:h-[850px] lg:h-[451px] lg:w-1/3 xl:h-[451px] 2xl:h-[451px]"
    >
      <motion.img
        src={url}
        alt="Destinations image"
        className="absolute z-0 aspect-[3/4] h-full p-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-opacity-50 z-10 flex h-1/5 w-4/6 flex-col gap-3 rounded-lg p-3"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-popins text-blueGray text-lg font-medium">
            {t(location)}
          </h3>
          <p className="font-popins text-blueGray text-lg font-medium">
            {price}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={cursorVector}
            alt="Cursor vector"
            className="aspect-square h-4 w-4"
          />
          <p className="font-popins text-blueGray text-base font-medium">
            {duration} {convertDaysToDay(duration, t)} {t('trip')}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
