export interface IProps {
  label: string;
  link: string;
}

export const NavItem = ({ label, link }: IProps) => {
  return (
    <a
      href={link}
      className="text-midnight font-opensans after:bg-midnight relative after:absolute after:-bottom-1 after:-left-full after:h-1 after:w-full after:rounded after:transition-transform after:duration-300 after:content-[''] hover:after:translate-x-full"
    >
      {label}
    </a>
  );
};
