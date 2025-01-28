import { Headers } from '../atoms/Headers';

export const Footer = () => {
  return (
    <footer className="mx-36 my-20 flex justify-between">
      <Headers
        label="Jadoo."
        sublabel="Book your trip in minute, get full control for much longer"
        labelStyles="text-5xl text-deepblue"
        sublabelStyles="text-sm text-softgray max-w-[225px]"
        sectionStyles="gap-5"
      />
    </footer>
  );
};
