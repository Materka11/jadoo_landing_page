import { BackgroundImage } from '../atoms/BackgroundImage';
import MainContent from '../organisms/MainContent';
import { Category } from '../organisms/Category';
import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import TopSelling from '../organisms/TopSelling';

export const HomeTemplate = () => {
  return (
    <div className="flex h-full min-h-screen w-full max-w-[1440px] flex-col justify-between p-6 lg:p-0 lg:px-6 lg:py-6 xl:px-32 xl:py-12">
      <BackgroundImage />
      <Header />
      <section>
        <MainContent />
        <TopSelling />
        <Category />
      </section>
      <Footer />
    </div>
  );
};
