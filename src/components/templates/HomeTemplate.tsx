import { BackgroundImage } from '../atoms/BackgroundImage';
import MainContent from '../organisms/MainContent';
import { Category } from '../organisms/Category';
import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { EasyAndFast } from '../organisms/EasyAndFast';
import { Testimonials } from '../organisms/Testimonials';
import TopSelling from '../organisms/TopSelling';
import { LogosSection } from '../organisms/LogosSection';

export const HomeTemplate = () => {
  return (
    <div className="flex h-full min-h-screen w-full max-w-[1200px] flex-col justify-between gap-10 overflow-x-hidden p-6 lg:gap-28 lg:p-0 lg:px-6 lg:py-6 xl:py-12">
      <BackgroundImage />
      <Header />
      <section className="flex flex-col gap-10 lg:gap-28">
        <MainContent />
        <TopSelling />
        <Category />
        <EasyAndFast />
        <LogosSection />
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};
