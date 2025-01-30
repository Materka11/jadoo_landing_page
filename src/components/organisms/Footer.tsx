import { Headers } from '../atoms/Headers';
import { Navlinks } from '../atoms/Navlinks';
import { Socials } from '../molecules/Socials';
import { ISocial } from '../atoms/SocialIcon';
import { FacebookIcon } from '../atoms/FacebookIcon';
import { InstagramIcon } from '../atoms/InstagramIcon';
import { TwitterIcon } from '../atoms/TwitterIcon';
import { IAppStore } from '../atoms/AppStore';
import { AppleIcon } from '../atoms/AppleIcon';
import { GooglePlayIcon } from '../atoms/GooglePlayIcon';

export const Footer = () => {
  const LINKS = {
    company: [
      { label: 'About', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Mobile', url: '/' },
    ],
  };

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

  const APP_STORIES: IAppStore[] = [
    {
      Icon: GooglePlayIcon,
      label: 'Get it on',
      link: 'https://google.com',
      sublabel: 'Google Play',
    },
    {
      Icon: AppleIcon,
      label: 'Available on the',
      link: 'https://apple.com',
      sublabel: 'Apple Store',
    },
  ];

  return (
    <footer className="mx-36 my-20 flex justify-between">
      <Headers
        label="Jadoo."
        sublabel="Book your trip in minute, get full control for much longer"
        labelStyles="text-5xl text-deepblue"
        sublabelStyles="text-sm text-softgray max-w-[225px]"
        sectionStyles="gap-5"
      />
      <Navlinks label="Company" links={LINKS?.company} />
      <Socials socials={SOCIALS} appStories={APP_STORIES} />
    </footer>
  );
};
