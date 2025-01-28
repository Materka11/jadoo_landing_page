import { Headers } from '../atoms/Headers';
import { Navlinks } from '../atoms/Navlinks';
import { Socials } from '../molecules/Socials';

export const Footer = () => {
  const LINKS = {
    company: [
      { label: 'About', url: '/' },
      { label: 'Careers', url: '/' },
      { label: 'Mobile', url: '/' },
    ],
  };

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
      <Socials />
    </footer>
  );
};
