import { Meta, StoryFn } from '@storybook/react';
import { ListElement, IListElement } from '../../components/atoms/ListElement';
import { ChooseDestinationIcon } from '../../components/atoms/ChooseDestinationIcon';

export default {
  title: 'Atoms/ListElement',
  component: ListElement,
} as Meta;

const Template: StoryFn<IListElement> = (args) => <ListElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  Icon: ChooseDestinationIcon,
  label: 'Choose Destination',
  description: 'Pick a destination that suits your travel plans.',
};
