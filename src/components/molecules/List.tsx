import { IListElement, ListElement } from '../atoms/ListElement';

export interface IProps {
  items: IListElement[];
}

export const List = ({ items }: IProps) => {
  return (
    <section className="flex flex-col gap-12">
      {items?.map((item) => <ListElement {...item} key={item?.label} />)}
    </section>
  );
};
