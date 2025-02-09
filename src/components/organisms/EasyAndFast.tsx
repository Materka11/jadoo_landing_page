import { ChooseDestinationIcon } from '../atoms/ChooseDestinationIcon';
import { Headers } from '../atoms/Headers';
import { ExampleTrip } from '../molecules/ExampleTrip';
import { IListElement } from '../atoms/ListElement';
import { List } from '../molecules/List';
import { PaymentIcon } from '../atoms/PaymentIcon';
import { ReachAirportIcon } from '../atoms/ReachAirportIcon';

export const EasyAndFast = () => {
  const ITEMS_LIST: IListElement[] = [
    {
      Icon: ChooseDestinationIcon,
      label: 'Choose Destination',
      description: 'Pick a destination that suits your travel plans.',
    },
    {
      Icon: PaymentIcon,
      label: 'Make Payment',
      description: 'Complete your booking with our secure payment system.',
    },
    {
      Icon: ReachAirportIcon,
      label: 'Reach Airport on Selected Date',
      description: 'Arrive at the airport on your selected date and time.',
    },
  ];

  return (
    <section className="flex flex-col justify-between gap-12 sm:items-center lg:flex-row">
      <div className="flex flex-col gap-10 sm:gap-7">
        <Headers
          label={'Easy and Fast'}
          sublabel={'Book Your Next Trip In 3 Easy Steps'}
          labelStyles={'font-[600] text-lg text-text-color'}
          sublabelStyles={'font-bold text-5xl text-deepblue font-volkhov'}
          sectionStyles="max-w-[500px] gap-4"
        />
        <List items={ITEMS_LIST} />
      </div>
      <div className="h-fit w-[485px]">
        <ExampleTrip />
      </div>
    </section>
  );
};
