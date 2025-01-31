import { ILink, Navlinks } from '../atoms/Navlinks';

export interface IGroupLinks {
  [key: string]: ILink[];
}

export interface IProps {
  groupLinks: IGroupLinks;
}

export const ListNavlinks = ({ groupLinks }: IProps) => {
  return (
    <div className="flex gap-18">
      {Object.entries(groupLinks).map(([label, links]) => (
        <Navlinks key={label} label={label} links={links} />
      ))}
    </div>
  );
};
