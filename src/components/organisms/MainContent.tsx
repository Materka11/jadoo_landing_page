import { TextAndButtons } from '../molecules/TextAndButtons';
import { MainContentImage } from '../atoms/MainContentImage';

const MainContent = () => {
  return (
    <section className="flex sm:flex-col sm:items-center sm:justify-center lg:flex-row xl:flex-row 2xl:flex-row">
      <TextAndButtons />
      <MainContentImage />
    </section>
  );
};

export default MainContent;
