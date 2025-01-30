import { ElementType } from 'react';

export interface ISocial {
  Icon: ElementType;
  link: string;
  isColor?: boolean;
}

export const SocialIcon = ({ Icon, link, isColor }: ISocial) => {
  return (
    <a
      href={link}
      aria-label="facebook"
      className={`text-darkblue flex h-11 w-11 items-center justify-center rounded-full bg-white p-4 shadow-lg ${isColor ? 'bg-conic-180 from-[#B8D2F1] via-[#D164DA] to-[#CED8CB] text-white' : ''}`}
    >
      <Icon />
    </a>
  );
};
