import { Button } from '../atoms/Button';

export interface IProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const Card = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: IProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button label={buttonText} onClick={onButtonClick} />
    </div>
  );
};
