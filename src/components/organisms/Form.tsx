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
    <section className="relative flex h-full w-full flex-col justify-between gap-5 rounded-[20px] bg-[#DFD7F9]/20 px-2 py-5 sm:px-12 lg:h-[407px] lg:gap-0 lg:rounded-tl-[129px] lg:px-36 lg:py-20">
      <img
        src={BgForm}
        alt="Background image"
        className="absolute bottom-0 -left-20 z-0 hidden aspect-[4/3] lg:block"
        loading="lazy"
      />
      <img
        src={BgForm}
        className="firefox-hidden absolute top-0 -right-26 z-0 hidden aspect-[4/3] scale-75 -rotate-90 lg:block"
        alt="Background image"
        loading="lazy"
      />
      <img
        src={Arrow}
        className="absolute top-0 right-0 z-10 hidden aspect-[4/3] -translate-y-1/4 translate-x-1/4 lg:block"
        alt="Arrow"
        loading="lazy"
      />
      <h3 className="text-text-color z-10 text-center text-lg font-[600] lg:text-[33px] lg:leading-[54px]">
        {label}
      </h3>
      <FormInput buttonText={buttonText} placeholder={placeholder} />
    </section>
  );
};
