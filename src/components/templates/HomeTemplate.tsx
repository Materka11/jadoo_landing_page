import { BackgroundImage } from '../atoms/BackgroundImage';
import MainContent from '../organisms/MainContent';
import { Category } from '../organisms/Category';
import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { EasyAndFast } from '../organisms/EasyAndFast';

export const HomeTemplate = () => {
  return (
    <div className="flex h-full min-h-screen w-full max-w-[1440px] flex-col justify-between gap-10 p-6 lg:gap-28 lg:p-0 lg:px-6 lg:py-6 xl:py-12">
      <BackgroundImage />
      <Header />
      <section className="flex flex-col gap-10 lg:gap-28">
        <MainContent />

        <Category />
        <EasyAndFast />
      </section>
      <Footer />
    </div>
  );
};
