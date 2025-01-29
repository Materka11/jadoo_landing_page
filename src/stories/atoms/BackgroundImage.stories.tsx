import { Meta, StoryFn } from '@storybook/react';
import { BackgroundImage } from '../../components/atoms/BackgroundImage';

export default {
  title: 'Atoms/BackgroundImage',
  component: BackgroundImage,
} as Meta;

const Template: StoryFn = () => (
  <div style={{ position: 'relative', width: '704px', height: '724px' }}>
    <BackgroundImage />
  </div>
);

export const Default = Template.bind({});
