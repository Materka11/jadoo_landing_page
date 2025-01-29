import { Meta, StoryFn } from '@storybook/react';
import { SocialIcon, ISocial } from '../../components/atoms/SocialIcon';
import { FacebookIcon } from '../../components/atoms/FacebookIcon';

export default {
  title: 'Atoms/SocialIcon',
  component: SocialIcon,
} as Meta;

const Template: StoryFn<ISocial> = (args) => <SocialIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  Icon: FacebookIcon,
  isColor: false,
  link: 'https://facebook.com',
};

export const Color = Template.bind({});

Color.args = {
  Icon: FacebookIcon,
  isColor: true,
  link: 'https://facebook.com',
};
