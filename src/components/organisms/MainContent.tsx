import TextAndButtons from '../../molecules/TextAndButtons';
import { MainContentImage } from '../atoms/MainContentImage';

const MainContent = () => {
  return (
    <div className="m-8 flex sm:flex-col sm:items-center sm:justify-center lg:flex-row xl:flex-row 2xl:flex-row">
      <TextAndButtons />
      <MainContentImage />
    </div>
  );
};

export default MainContent;
