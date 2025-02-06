import { TripPost } from '../atoms/TripPost';
import PostImage from '../../assets/image/PostImage.webp';
import { LeafIcon } from '../atoms/LeafIcon';
import { MapIcon } from '../atoms/MapIcon';
import { SendIcon } from '../atoms/SendIcon';
import { TripProgress } from '../atoms/TripProgress';
import ProfileProgress from '../../assets/image/ProfileProgress.webp';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ExampleTrip = () => {
  const OPTIONS = [LeafIcon, MapIcon, SendIcon];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div className="relative w-fit" ref={ref}>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <TripPost
          description="14 - 29 June | by Robbin Johnosson"
          title="Trip To Greece"
          peopleNum={24}
          img={PostImage}
          options={OPTIONS}
        />
      </motion.div>
      <motion.div
        className="absolute top-[55%] right-0 z-20 translate-x-[45%]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <TripProgress
          img={ProfileProgress}
          label="Ongoing"
          sublabel="Trip to rome"
          progress={40}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 z-0 h-[367px] w-[354px] -translate-y-1/10 translate-x-1/10 rounded-full bg-[#59B1E6] opacity-40 blur-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 0.4, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.div>
  );
};
