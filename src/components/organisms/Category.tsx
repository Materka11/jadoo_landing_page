import { Headers } from '../atoms/Headers';

export const Category = () => {
  return (
    <section>
      <Headers
        label="Category"
        sublabel="We Offer Best Services"
        labelStyles="text-sm lg:text-lg text-gray-600 font-bold uppercase"
        sublabelStyles="text-3xl lg:text-5xl text-navyblue font-bold font-volkhov"
        sectionStyles="gap-1 lg:gap-2 text-center"
      />
    </section>
  );
};
