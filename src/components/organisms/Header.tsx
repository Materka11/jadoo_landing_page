import { AuthButton } from '../atoms/AuthButton';
import { LanguageSelector } from '../atoms/LanguageSelector';
import { Logo } from '../atoms/Logo';
import { Nav } from '../molecules/Nav';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { label: t('destinations'), link: '/' },
    { label: t('hotels'), link: '/' },
    { label: t('flights'), link: '/' },
    { label: t('bookings'), link: '/' },
  ];

  const LANGUAGES = ['EN', 'PL'];

  return (
    <header className="mx-36 my-12 flex h-10 w-auto items-center justify-between">
      <Logo />
      <Nav items={NAV_ITEMS} />
      <section className="flex gap-11">
        <AuthButton label={t('login')} action={() => {}} />
        <AuthButton
          label={t('signup')}
          action={() => {}}
          isBorder
          className="ml-2"
        />
        <LanguageSelector languages={LANGUAGES} />
      </section>
    </header>
  );
};
