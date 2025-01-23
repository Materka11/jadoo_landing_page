export interface IProps {
  label: string;
  link: string;
}

export const NavItem = ({ label, link }: IProps) => {
  return (
    <a href={link} className="text-midnightBlue">
      {label}
    </a>
  );
};
