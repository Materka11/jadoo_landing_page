import { Meta, StoryFn } from '@storybook/react';
import { Socials, IProps } from '../../components/molecules/Socials';
import { FacebookIcon } from '../../components/atoms/FacebookIcon';
import { InstagramIcon } from '../../components/atoms/InstagramIcon';
import { TwitterIcon } from '../../components/atoms/TwitterIcon';
import { GooglePlayIcon } from '../../components/atoms/GooglePlayIcon';
import { AppleIcon } from '../../components/atoms/AppleIcon';

export default {
  title: 'Molecules/Socials',
  component: Socials,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Socials {...args} />;

export const Default = Template.bind({});
Default.args = {
  socials: [
    {
      Icon: FacebookIcon,
      link: 'https://facebook.com',
    },
    {
      Icon: InstagramIcon,
      link: 'https://instagram.com',
      isColor: true,
    },
    {
      Icon: TwitterIcon,
      link: 'https://twitter.com',
    },
  ],
  appStories: [
    {
      Icon: GooglePlayIcon,
      label: 'Get it on',
      link: 'https://google.com',
      sublabel: 'Google Play',
    },
    {
      Icon: AppleIcon,
      label: 'Available on the',
      link: 'https://apple.com',
      sublabel: 'Apple Store',
    },
  ],
};
