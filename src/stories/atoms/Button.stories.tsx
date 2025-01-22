import { Meta, StoryFn } from '@storybook/react';
import { Button, IProps } from '../../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked'),
};
