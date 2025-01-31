import { Headers } from '../atoms/Headers';
import { Socials } from '../molecules/Socials';
import { ISocial } from '../atoms/SocialIcon';
import { FacebookIcon } from '../atoms/FacebookIcon';
import { InstagramIcon } from '../atoms/InstagramIcon';
import { TwitterIcon } from '../atoms/TwitterIcon';
import { IAppStore } from '../atoms/AppStore';
import { AppleIcon } from '../atoms/AppleIcon';
import { GooglePlayIcon } from '../atoms/GooglePlayIcon';
import { IGroupLinks, ListNavlinks } from '../molecules/ListNavlinks';

export const Footer = () => {
  const LINKS: IGroupLinks = {
    company: [
      { label: 'About', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Mobile', url: '/' },
    ],
    contact: [
      { label: 'Help/FAQ', url: '/' },
      { label: 'Press', url: '/' },
      { label: 'Affilates', url: '/' },
    ],
    more: [
      { label: 'Airlinefees', url: '/' },
      { label: 'Airline', url: '/' },
      { label: 'Low fare tips', url: '/' },
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
    <footer className="flex flex-col items-center gap-12 lg:gap-21">
      <section className="flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:gap-0">
        <Headers
          label="Jadoo."
          sublabel="Book your trip in minute, get full control for much longer"
          labelStyles="text-3xl lg:text-5xl text-deepblue"
          sublabelStyles="text-xs lg:text-sm text-gray-600 max-w-[225px]"
          sectionStyles="gap-3 lg:gap-5"
        />
        <ListNavlinks groupLinks={LINKS} />
        <Socials socials={SOCIALS} appStories={APP_STORIES} />
      </section>
      <h6 className="text-center text-xs text-gray-600 lg:text-sm">
        All rights reserved
      </h6>
    </footer>
  );
};
