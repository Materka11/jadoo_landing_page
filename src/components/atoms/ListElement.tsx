import { ElementType } from 'react';

export interface IListElement {
  Icon: ElementType;
  label: string;
  description: string;
}

export const ListElement = ({ Icon, description, label }: IListElement) => {
  return (
    <section className="flex max-w-[395px] items-center gap-5">
      <div className="h-14 w-14">
        <Icon className="h-14 w-14" />
      </div>
      <article className="text-text-color flex flex-col gap-1 leading-5">
        <h3 className="font-bold">{label}</h3>
        <p>{description}</p>
      </article>
    </section>
  );
};
