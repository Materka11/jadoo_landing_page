import { Headers } from '../atoms/Headers';

export const EasyAndFast = () => {
  return (
    <section>
      <Headers
        label={'Easy and Fast'}
        sublabel={'Book Your Next Trip In 3 Easy Steps'}
        labelStyles={'font-[600] text-lg text-text-color'}
        sublabelStyles={'font-bold text-5xl text-deepblue font-volkhov'}
        sectionStyles="max-w-[500px] gap-4"
      />
    </section>
  );
};
