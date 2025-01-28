import { Meta, StoryFn } from '@storybook/react';
import { Headers, IProps } from '../../components/atoms/Headers';

export default {
  title: 'Atoms/Headers',
  component: Headers,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Headers {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Jadoo.',
  sublabel: 'Book your trip in minute, get full control for much longer',
  labelStyles: 'text-5xl text-deepblue',
  sublabelStyles: 'text-sm text-softgray max-w-[225px]',
  sectionStyles: 'gap-5',
};
