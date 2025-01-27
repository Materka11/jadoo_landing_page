export interface IButtonProps {
  label: string;
  color: string;
  href: string;
}

const RectangleButton = ({ label, color, href }: IButtonProps) => {
  return (
    <button
      className={`h-16 w-44 ${color} transform cursor-pointer rounded-xl transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] focus:scale-105 active:scale-95 active:shadow-[0px_3px_15px_rgba(0,0,0,0.2)]`}
    >
      <a href={href} className="text-white">
        {label}
      </a>
    </button>
  );
};

export default RectangleButton;
