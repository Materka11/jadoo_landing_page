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
      className={`font-opensans text-midnight cursor-pointer rounded-md px-6 py-2 font-medium hover:text-white ${isBorder ? 'hover:bg-midnight border' : ''} ${className} `}
    >
      {label}
    </button>
  );
};
