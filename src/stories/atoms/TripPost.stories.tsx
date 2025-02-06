import { Meta, StoryFn } from '@storybook/react';
import { TripPost, IProps } from '../../components/atoms/TripPost';
import { LeafIcon } from '../../components/atoms/LeafIcon';
import { MapIcon } from '../../components/atoms/MapIcon';
import { SendIcon } from '../../components/atoms/SendIcon';
import PostImage from '../../assets/image/PostImage.webp';

export default {
  title: 'Atoms/TripPost',
  component: TripPost,
} as Meta;

const Template: StoryFn<IProps> = (args) => <TripPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: '14 - 29 June | by Robbin Johnosson',
  options: [LeafIcon, MapIcon, SendIcon],
  peopleNum: 24,
  img: PostImage,
  title: 'Trip To Greece',
};
