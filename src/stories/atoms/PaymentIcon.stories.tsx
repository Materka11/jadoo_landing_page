import { Meta, StoryFn } from '@storybook/react';
import { PaymentIcon, IProps } from '../../components/atoms/PaymentIcon';

export default {
  title: 'Atoms/PaymentIcon',
  component: PaymentIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <PaymentIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
