import { AuthButton } from '../atoms/AuthButton';
import { HamburgerIcon } from '../atoms/HamburgerIcon';
import { LanguageSelector } from '../atoms/LanguageSelector';
import { Logo } from '../atoms/Logo';
import { Nav } from '../molecules/Nav';
import { useTranslation } from 'react-i18next';
import { useHamburgerStore } from '../../stores/hamburgerStore';

export const Header = () => {
  const { t } = useTranslation();
  const toggleHamburgerMenu = useHamburgerStore(
    (state) => state.toggleHamburgerMenu
  );

  const NAV_ITEMS = [
    { label: t('destinations'), link: '/' },
    { label: t('hotels'), link: '/' },
    { label: t('flights'), link: '/' },
    { label: t('bookings'), link: '/' },
  ];
  const LANGUAGES = ['EN', 'PL'];

  const handleHamburgerClick = () => {
    toggleHamburgerMenu();
  };

  return (
    <header className="flex w-auto items-center justify-between p-6 lg:p-0 lg:px-36 lg:py-12">
      <Logo />
      <div className="absolute top-10 -right-45 flex w-fit flex-col justify-between text-white lg:flex-row lg:items-center lg:gap-20">
        <Nav items={NAV_ITEMS} />
        <section className="flex flex-col lg:flex-row lg:gap-11">
          <AuthButton label={t('login')} action={() => {}} />
          <AuthButton
            label={t('signup')}
            action={() => {}}
            isBorder
            className="ml-2"
          />
          <LanguageSelector languages={LANGUAGES} />
        </section>
      </div>
      <HamburgerIcon className="lg:hidden" onClick={handleHamburgerClick} />
    </header>
  );
};
