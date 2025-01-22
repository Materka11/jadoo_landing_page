export interface IProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: IProps) => {
  return <button onClick={onClick}>{label}</button>;
};
