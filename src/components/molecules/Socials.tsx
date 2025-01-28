import { ISocial, SocialIcon } from '../atoms/SocialIcon';
import { FacebookIcon } from '../../assets/FacebookIcon';
import { InstagramIcon } from '../../assets/InstagramIcon';
import { TwitterIcon } from '../../assets/TwitterIcon';

export const Socials = () => {
  const SOCIALS: ISocial[] = [
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
  ];

  return (
    <section className="flex gap-6">
      {SOCIALS?.map((social) => (
        <SocialIcon
          key={social?.link}
          link={social?.link}
          Icon={social?.Icon}
          isColor={social?.isColor}
        />
      ))}
    </section>
  );
};
