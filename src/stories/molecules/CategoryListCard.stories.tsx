import { Meta, StoryFn } from '@storybook/react';
import {
  CategoryListCard,
  IProps,
} from '../../components/molecules/CategoryListCard';
import { SatelliteWithRectangleIcon } from '../../components/atoms/SatelliteWithRectangleIcon';
import { PlaneWithRectangleIcon } from '../../components/atoms/PlaneWithRectangleIcon';
import { MicWithRectangleIcon } from '../../components/atoms/MicWithRectangleIcon';
import { SprocketWithRectangleIcon } from '../../components/atoms/SprocketWithRectangleIcon';

export default {
  title: 'Molecules/CategoryListCard',
  component: CategoryListCard,
} as Meta;

const Template: StoryFn<IProps> = (args) => <CategoryListCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      Icon: SatelliteWithRectangleIcon,
      title: 'Calculated Weather',
      description:
        'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      Icon: PlaneWithRectangleIcon,
      title: 'Best Flights',
      description:
        'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      Icon: MicWithRectangleIcon,
      title: 'Local Events',
      description:
        'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    },
    {
      Icon: SprocketWithRectangleIcon,
      title: 'Customization',
      description:
        'We deliver outsourced aviation services for military customers',
    },
  ],
};
