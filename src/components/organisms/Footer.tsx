import { Navlinks } from '../atoms/Navlinks';

export const Footer = () => {
  const LINKS = {
    company: [
      { label: 'About', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Mobile', url: '/' },
    ],
  };

  return (
    <footer>
      <Navlinks label="Company" links={LINKS?.company} />
    </footer>
  );
};
