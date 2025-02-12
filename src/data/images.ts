export interface IImage {
  id: number;
  url: string;
  alt: string;
}
export const IMAGES: IImage[] = [
  { id: 1, url: 'src/assets/image/alitalia.webp', alt: 'Alitalia' },
  { id: 2, url: 'src/assets/image/axon.webp', alt: 'Axon' },
  { id: 3, url: 'src/assets/image/expedia.webp', alt: 'Expedia' },
  { id: 4, url: 'src/assets/image/jetstar.webp', alt: 'Jetstar' },
  { id: 5, url: 'src/assets/image/qantas.webp', alt: 'Qantas' },
];
