import { TopSellingText } from '../atoms/TopSellingText';
import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';

export const HomeTemplate = () => {
  return (
    <div className="flex h-full min-h-screen w-full max-w-[1440px] flex-col justify-between p-6 lg:p-0 lg:px-6 lg:py-6 xl:px-32 xl:py-12">
      <Header />
      <section>
        <TopSellingText />
      </section>
      <Footer />
    </div>
  );
};
