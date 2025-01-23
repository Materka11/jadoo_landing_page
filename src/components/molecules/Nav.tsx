import { IProps as IItem, NavItem } from '../atoms/NavItem';

interface IProps {
  items: IItem[];
}

export const Nav = ({ items }: IProps) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="">
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
