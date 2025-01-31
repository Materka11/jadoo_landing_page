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
  const isHamburgerMenuOpen = useHamburgerStore(
    (state) => state.isHamburgerMenuOpen
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
    <header className="flex w-auto items-center justify-between">
      <Logo />
      <div
        className={`absolute top-10 -right-45 flex h-9/10 w-fit flex-col justify-between gap-10 pb-12 lg:static lg:h-auto lg:flex-row lg:items-center lg:gap-20 lg:pb-0 ${!isHamburgerMenuOpen && 'hidden lg:flex'}`}
      >
        <section>
          <Nav items={NAV_ITEMS} />
          <section className="block lg:hidden">
            <LanguageSelector languages={LANGUAGES} />
          </section>
        </section>
        <section className="flex flex-col gap-5 lg:flex-row xl:gap-11">
          <AuthButton label={t('login')} action={() => {}} />
          <AuthButton
            label={t('signup')}
            action={() => {}}
            isBorder
            className="ml-2"
          />
          <section className="hidden justify-center lg:flex lg:items-center">
            <LanguageSelector languages={LANGUAGES} />
          </section>
        </section>
      </div>
      <HamburgerIcon className="lg:hidden" onClick={handleHamburgerClick} />
    </header>
  );
};
