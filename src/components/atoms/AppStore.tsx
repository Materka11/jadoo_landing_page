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
      className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2 text-white"
    >
      <Icon className="h-5 w-5" />
      <p className="flex flex-col text-[8px] leading-3">
        <h4>{label}</h4>
        <h5 className="text-[10px] font-bold">{sublabel}</h5>
      </p>
    </a>
  );
};
