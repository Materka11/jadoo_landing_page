type HrefButtonProps = {
  label: string;
  color: string;
  href: string;
  onClick?: never;
};

type OnClickButtonProps = {
  label: string;
  color: string;
  onClick: () => void;
  href?: never;
};

export type ButtonProps = HrefButtonProps | OnClickButtonProps;

export const RectangleButton = ({
  label,
  color,
  href,
  onClick,
}: ButtonProps) => {
  if (href && onClick) {
    throw new Error('Cannot pass both href and onClick to RectangleButton.');
  }

  const commonStyles = `flex h-12 w-28 transform cursor-pointer items-center justify-center rounded-xl text-xs lg:text-sm text-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] focus:scale-105 active:scale-95 active:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] lg:h-16 lg:w-44 ${color}`;

  if (href) {
    return (
      <a href={href} className={commonStyles}>
        {label}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={commonStyles}>
        {label}
      </button>
    );
  }
};
