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
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const LINKS: IGroupLinks = {
    company: [
      { label: t('about'), url: '/' },
      { label: t('careers'), url: '/' },
      { label: t('mobile'), url: '/' },
    ],
    contact: [
      { label: t('help'), url: '/' },
      { label: t('press'), url: '/' },
      { label: t('affiliates'), url: '/' },
    ],
    more: [
      { label: t('airlinefees'), url: '/' },
      { label: t('airline'), url: '/' },
      { label: t('lowfaretips'), url: '/' },
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
      label: t('googlePlay_label'),
      link: 'https://google.com',
      sublabel: 'Google Play',
    },
    {
      Icon: AppleIcon,
      label: t('appleStore_label'),
      link: 'https://apple.com',
      sublabel: 'Apple Store',
    },
  ];

  return (
    <footer className="flex flex-col items-center gap-12 lg:gap-21">
      <section className="flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:gap-0">
        <Headers
          label={t('label')}
          sublabel={t('sublabel')}
          labelStyles="text-3xl lg:text-5xl text-deepblue"
          sublabelStyles="text-xs lg:text-sm text-gray-600 max-w-[225px]"
          sectionStyles="gap-3 lg:gap-5"
        />
        <ListNavlinks groupLinks={LINKS} />
        <Socials socials={SOCIALS} appStories={APP_STORIES} />
      </section>
      <h2 className="text-center text-xs text-gray-600 lg:text-sm">
        {t('rightsReserved')}
      </h2>
    </footer>
  );
};
