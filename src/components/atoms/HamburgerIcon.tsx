export interface IProps {
  className?: string;
  onClick?: () => void;
}

export const HamburgerIcon = ({ className, onClick }: IProps) => {
  return (
    <button
      className={`${className} flex cursor-pointer flex-col gap-[3px]`}
      onClick={onClick}
    >
      <span className="bg-midnight block h-0.5 w-4" />
      <span className="bg-midnight block h-0.5 w-4" />
      <span className="bg-midnight block h-0.5 w-4" />
    </button>
  );
};
