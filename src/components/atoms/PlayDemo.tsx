import Triangle from './Triangle';

interface IPlayDemoProps {
  onClick?: () => void;
}

const PlayDemo = ({ onClick }: IPlayDemoProps) => (
  <div className="flex items-center gap-3">
    <button
      onClick={onClick}
      className="bg-coral relative flex h-13 w-13 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0px_6px_20px_rgba(223,105,81,0.5)] active:scale-95"
    >
      <div className="bg-coral absolute inset-0 animate-pulse rounded-full opacity-30"></div>
      <Triangle />
    </button>
    <p className="font-popins text-dark-gray text-lg font-medium">Play Demo</p>
  </div>
);

export default PlayDemo;
