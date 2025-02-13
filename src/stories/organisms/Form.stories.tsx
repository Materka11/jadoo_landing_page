import { Meta, StoryFn } from '@storybook/react';
import { Form, IProps } from '../../components/organisms/Form';

export default {
  title: 'Organisms/Form',
  component: Form,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'test',
  label: 'test',
  placeholder: 'test',
};
