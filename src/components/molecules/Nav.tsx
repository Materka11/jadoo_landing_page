import { IProps as IItem, NavItem } from '../atoms/NavItem';

interface IProps {
  items: IItem[];
}

export const Nav = ({ items }: IProps) => {
  return (
    <nav className="w-full max-w-[459px]">
      <ul className="flex justify-between gap-14">
        {items.map((item, index) => (
          <li key={index} className="list-none">
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
