import { EmailIcon } from './EmailIcon';
import { RectangleButton } from './RectangleButton';

export interface IProps {
  placeholder: string;
  buttonText: string;
}

export const FormInput = ({ buttonText, placeholder }: IProps) => {
  return (
    <div className="z-10 flex justify-center gap-6">
      <div className="font-montserrat flex h-[68px] w-[421px] items-center gap-4 rounded-xl bg-white px-8 py-6 text-sm">
        <EmailIcon className="h-4 w-4" />
        <input
          placeholder={placeholder}
          type="email"
          className="w-full placeholder:text-[#39425D] focus-visible:outline-0"
        />
      </div>
      <RectangleButton
        label={buttonText}
        color="bg-gradient-to-t from-[#FF7D68] to-[#FF946D]"
        onClick={() => {}}
      />
    </div>
  );
};
