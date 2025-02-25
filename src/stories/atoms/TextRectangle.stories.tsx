import { Meta, StoryFn } from '@storybook/react';
import { TextRectangle, IProps } from '../../components/atoms/TextRectangle';

export default {
  title: 'Atoms/TextRectangle',
  component: TextRectangle,
} as Meta;

const Template: StoryFn<IProps> = (args) => <TextRectangle {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-[370px] h-3',
};
