import { useTranslation } from 'react-i18next';
import { ChooseDestinationIcon } from '../atoms/ChooseDestinationIcon';
import { Headers } from '../atoms/Headers';
import { ExampleTrip } from '../molecules/ExampleTrip';
import { IListElement } from '../atoms/ListElement';
import { List } from '../molecules/List';
import { PaymentIcon } from '../atoms/PaymentIcon';
import { ReachAirportIcon } from '../atoms/ReachAirportIcon';

export const EasyAndFast = () => {
  const { t } = useTranslation();

  const ITEMS_LIST: IListElement[] = [
    {
      Icon: ChooseDestinationIcon,
      label: t('choose_destination'),
      description: t('choose_destination_description'),
    },
    {
      Icon: PaymentIcon,
      label: t('make_payment'),
      description: t('make_payment_description'),
    },
    {
      Icon: ReachAirportIcon,
      label: t('reach_airport'),
      description: t('reach_airport_description'),
    },
  ];

  return (
    <section className="flex flex-col justify-between gap-12 sm:items-center lg:flex-row">
      <div className="flex flex-col gap-10 sm:gap-7">
        <Headers
          label={t('easy_and_fast')}
          sublabel={t('book_trip_steps')}
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
