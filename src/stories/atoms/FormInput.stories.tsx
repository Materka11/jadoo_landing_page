import { Meta, StoryFn } from '@storybook/react';
import { FormInput, IProps } from '../../components/atoms/FormInput';

export default {
  title: 'Atoms/FormInput',
  component: FormInput,
} as Meta;

const Template: StoryFn<IProps> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'test',
  placeholder: 'test',
};
