import { ChooseDestinationIcon } from '../atoms/ChooseDestinationIcon';
import { Headers } from '../atoms/Headers';
import { ExampleTrip } from '../molecules/ExampleTrip';
import { ListElement } from '../atoms/ListElement';

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
      <ListElement
        Icon={ChooseDestinationIcon}
        label={'Choose Destination'}
        description={'Pick a destination that suits your travel plans.'}
      />
      <ExampleTrip />
    </section>
  );
};
