export interface IProps {
  className?: string;
}

export const EmailIcon = ({ className }: IProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
        stroke="#39425D"
        strokeLinecap="round"
      />
      <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
    </svg>
  );
};
