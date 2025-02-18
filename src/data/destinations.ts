import { ITopDestinationsCardProps } from '../components/atoms/TopDestinationsCard';
import romeImage from '../assets/image/rome.webp';
import londonImage from '../assets/image/london.webp';
import fullEuropeImage from '../assets/image/fullEuropa.webp';

export const DESTINATIONS: ITopDestinationsCardProps[] = [
  {
    id: 1,
    url: romeImage,
    location: 'rome_italy',
    price: '$5.42k',
    duration: '10',
  },
  {
    id: 2,
    url: londonImage,
    location: 'london_uk',
    price: '$4.2k',
    duration: '12',
  },
  {
    id: 3,
    url: fullEuropeImage,
    location: 'full_europe',
    price: '$15k',
    duration: '28',
  },
];
