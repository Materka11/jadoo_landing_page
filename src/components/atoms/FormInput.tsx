import { EmailIcon } from './EmailIcon';
import { RectangleButton } from './RectangleButton';

export interface IProps {
  placeholder: string;
  buttonText: string;
}

export const FormInput = ({ buttonText, placeholder }: IProps) => {
  return (
    <div className="z-10 flex items-center justify-center gap-6">
      <div className="font-montserrat flex items-center gap-4 rounded-xl bg-white px-4 py-4 text-xs lg:h-[68px] lg:w-[421px] lg:px-8 lg:py-6 lg:text-sm">
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
