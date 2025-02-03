import { Meta, StoryFn } from '@storybook/react';
import { ListNavlinks, IProps } from '../../components/molecules/ListNavlinks';

export default {
  title: 'Molecules/ListNavlinks',
  component: ListNavlinks,
} as Meta;

const Template: StoryFn<IProps> = (args) => <ListNavlinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  groupLinks: {
    company: [
      { label: 'About', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Mobile', url: '/' },
    ],
    contact: [
      { label: 'Help/FAQ', url: '/' },
      { label: 'Press', url: '/' },
      { label: 'Affilates', url: '/' },
    ],
    more: [
      { label: 'Airlinefees', url: '/' },
      { label: 'Airline', url: '/' },
      { label: 'Low fare tips', url: '/' },
    ],
  },
};
