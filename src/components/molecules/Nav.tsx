import { IProps as IItem, NavItem } from '../atoms/NavItem';

interface IProps {
  items: IItem[];
}

export const Nav = ({ items }: IProps) => {
  return (
    <nav className="max-w-[459px]">
      <ul className="flex justify-between gap-14">
        {items.map((item, index) => (
          <li key={index} className="list-none overflow-y-hidden">
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
