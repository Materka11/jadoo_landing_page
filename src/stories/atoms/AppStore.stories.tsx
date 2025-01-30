import { Meta, StoryFn } from '@storybook/react';
import { AppStore, IAppStore } from '../../components/atoms/AppStore';
import { GooglePlayIcon } from '../../components/atoms/GooglePlayIcon';

export default {
  title: 'Atoms/AppStore',
  component: AppStore,
} as Meta;

const Template: StoryFn<IAppStore> = (args) => <AppStore {...args} />;

export const Default = Template.bind({});
Default.args = {
  Icon: GooglePlayIcon,
  label: 'Get it on',
  link: 'https://google.com',
  sublabel: 'Google Play',
};
