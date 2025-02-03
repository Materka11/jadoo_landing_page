import { Meta, StoryFn } from '@storybook/react';
import { CategoryCard, IProps } from '../../components/atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../../components/atoms/PlaneWithRectangleIcon';

export default {
  title: 'Atoms/CategoryCard',
  component: CategoryCard,
} as Meta;

const Template: StoryFn<IProps> = (args) => <CategoryCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  Icon: PlaneWithRectangleIcon,
  title: 'Best Flights',
  description: 'Engrossed listening. Park gate sell they west hard for the.',
};
