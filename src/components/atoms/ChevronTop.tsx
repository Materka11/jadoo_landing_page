export interface IProps {
  className?: string;
}

export const ChevronTop = ({ className }: IProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 8.5L8 1.5L15 8.5"
        stroke="#BCB7C2"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
