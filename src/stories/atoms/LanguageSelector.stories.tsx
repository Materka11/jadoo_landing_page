import { Meta, StoryFn } from '@storybook/react';
import {
  LanguageSelector,
  IProps,
} from '../../components/atoms/LanguageSelector';

export default {
  title: 'Atoms/LanguageSelector',
  component: LanguageSelector,
} as Meta;

const Template: StoryFn<IProps> = (args) => <LanguageSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  languages: ['EN', 'PL'],
};
