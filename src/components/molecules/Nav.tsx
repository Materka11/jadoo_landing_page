import { IProps as IItem, NavItem } from '../atoms/NavItem';

export interface IProps {
  items: IItem[];
}

export const Nav = ({ items }: IProps) => {
  return (
    <nav className="max-w-[459px]">
      <ul className="flex flex-col justify-between lg:flex-row lg:gap-14">
        {items.map((item, index) => (
          <li key={index} className="list-none">
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
