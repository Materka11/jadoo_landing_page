export interface IProps {
  label: string;
  action: () => void;
  isBorder?: boolean;
  className?: string;
}

export const AuthButton = ({
  label,
  action,
  isBorder = false,
  className,
}: IProps) => {
  return (
    <button
      onClick={action}
      className={`font-opensans lg:text-midnight hover:text-midnight cursor-pointer rounded-md px-6 py-2 font-medium text-white lg:hover:text-white ${isBorder ? 'lg:hover:bg-midnight border hover:bg-white' : ''} ${className} `}
    >
      {label}
    </button>
  );
};
