import LogoIMG from '../../assets/image/logo.webp';

export const Logo = () => {
  return (
    <a aria-label="Home" href="/">
      <img src={LogoIMG} alt="Logo" className="w-28 max-w-max" />
    </a>
  );
};
