import { Meta, StoryFn } from '@storybook/react';
import { Testimonial, ITestimonial } from '../../components/atoms/Testimonial';
import Avatar from '../../assets/image/Avatar.webp';

export default {
  title: 'Atoms/Testimonial',
  component: Testimonial,
} as Meta;

const Template: StoryFn<ITestimonial> = (args) => <Testimonial {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: Avatar,
  content:
    '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
  name: 'Mike Taylor',
  subname: 'Lahore, Pakistan',
};
