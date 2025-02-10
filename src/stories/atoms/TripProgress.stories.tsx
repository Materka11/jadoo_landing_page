import { Meta, StoryFn } from '@storybook/react';
import { TripProgress, IProps } from '../../components/atoms/TripProgress';
import ProfileProgress from '../../assets/image/ProfileProgress.webp';

export default {
  title: 'Atoms/TripProgress',
  component: TripProgress,
} as Meta;

const Template: StoryFn<IProps> = (args) => <TripProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: ProfileProgress,
  label: 'Ongoing',
  sublabel: 'Trip to rome',
  progress: 40,
};
