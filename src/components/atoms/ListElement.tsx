import { ElementType } from 'react';

export interface IProps {
  Icon: ElementType;
  label: string;
  description: string;
}

export const ListElement = ({ Icon, description, label }: IProps) => {
  return (
    <section className="flex max-w-[395px] items-center gap-5">
      <Icon className="h-20 w-20" />
      <article className="text-text-color flex flex-col gap-1 leading-5">
        <h3 className="font-bold">{label}</h3>
        <p>{description}</p>
      </article>
    </section>
  );
};
