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
      className={`text-darkblue flex h-11 w-11 items-center justify-center rounded-full bg-white p-4 shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] focus:scale-105 active:scale-95 active:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] ${isColor ? 'bg-conic-180 from-[#B8D2F1] via-[#D164DA] to-[#CED8CB] text-white' : ''}`}
    >
      <Icon />
    </a>
  );
};
