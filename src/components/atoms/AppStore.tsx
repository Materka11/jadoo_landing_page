import { ElementType } from 'react';

export interface IAppStore {
  Icon: ElementType;
  label: string;
  link: string;
  sublabel: string;
}

export const AppStore = ({ Icon, label, link, sublabel }: IAppStore) => {
  return (
    <a
      href={link}
      className="flex items-center justify-center gap-1 rounded-2xl bg-black px-2 py-1 text-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] focus:scale-105 active:scale-95 active:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] lg:gap-2 lg:px-4 lg:py-2"
    >
      <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
      <p className="flex flex-col text-[6px] leading-3 lg:text-[8px]">
        <span>{label}</span>
        <span className="text-[8px] font-bold lg:text-[10px]">{sublabel}</span>
      </p>
    </a>
  );
};
