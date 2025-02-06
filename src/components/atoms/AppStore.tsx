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
      className="flex items-center justify-center gap-1 rounded-2xl bg-black px-2 py-1 text-white lg:gap-2 lg:px-4 lg:py-2"
    >
      <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
      <p className="flex flex-col text-[6px] leading-3 lg:text-[8px]">
        <span>{label}</span>
        <span className="text-[8px] font-bold lg:text-[10px]">{sublabel}</span>
      </p>
    </a>
  );
};
