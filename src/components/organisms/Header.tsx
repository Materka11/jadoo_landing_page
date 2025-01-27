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
    <header className="mx-36 my-12 flex h-10 w-auto items-center justify-between">
      <Logo />
      <Nav items={NAV_ITEMS} />
    </header>
  );
};
