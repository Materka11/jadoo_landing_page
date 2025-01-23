import { Logo } from '../atoms/Logo';
import { Nav } from '../molecules/Nav';

export const Header = () => {
  const NAV_ITEMS = [
    { label: 'Destinations', link: '/' },
    { label: 'Hotels', link: '/' },
    { label: 'Flights', link: '/' },
    { label: 'Bookings', link: '/' },
  ];

  return (
    <header className="flex w-full items-center">
      <Logo />
      <Nav items={NAV_ITEMS} />
    </header>
  );
};
