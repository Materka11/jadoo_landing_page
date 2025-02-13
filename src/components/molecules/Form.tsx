import { FormInput } from '../atoms/FormInput';
import BgForm from '../../assets/image/BgForm.webp';
import Arrow from '../../assets/image/Arrow.webp';

export interface IProps {
  label: string;
  placeholder: string;
  buttonText: string;
}

export const Form = ({ label, buttonText, placeholder }: IProps) => {
  return (
    <section className="relative flex h-[407px] w-full flex-col justify-between rounded-[20px] rounded-tl-[129px] bg-[#DFD7F9]/20 px-36 py-20">
      <img src={BgForm} className="absolute bottom-0 -left-20 z-0" />
      <img
        src={BgForm}
        className="absolute top-0 -right-26 z-0 scale-75 -rotate-90"
      />
      <img
        src={Arrow}
        className="absolute top-0 right-0 z-10 -translate-y-1/4 translate-x-1/4"
      />
      <h3 className="text-text-color z-10 text-center text-[33px] leading-[54px] font-[600]">
        {label}
      </h3>
      <FormInput buttonText={buttonText} placeholder={placeholder} />
    </section>
  );
};
