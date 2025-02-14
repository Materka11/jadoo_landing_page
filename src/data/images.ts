import alitalia from '../assets/image/alitalia.webp';
import axon from '../assets/image/axon.webp';
import expedia from '../assets/image/expedia.webp';
import jetstar from '../assets/image/jetstar.webp';
import qantas from '../assets/image/qantas.webp';

export interface IImage {
  id: number;
  url: string;
  alt: string;
}

export const IMAGES: IImage[] = [
  { id: 1, url: alitalia, alt: 'Alitalia' },
  { id: 2, url: axon, alt: 'Axon' },
  { id: 3, url: expedia, alt: 'Expedia' },
  { id: 4, url: jetstar, alt: 'Jetstar' },
  { id: 5, url: qantas, alt: 'Qantas' },
];
