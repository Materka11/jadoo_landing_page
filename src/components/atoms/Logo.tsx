import LogoIMG from '../../assets/image/Logo.webp';

export const Logo = () => {
  return (
    <a aria-label="Home" href="/">
      <img src={LogoIMG} alt="Logo" className="aspect-[3.5/1] w-42 max-w-max" />
    </a>
  );
};
