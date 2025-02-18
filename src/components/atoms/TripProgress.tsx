import { useTranslation } from 'react-i18next';

export interface IProps {
  img: string;
  label: string;
  sublabel: string;
  progress: number;
  styles?: string;
}

export const TripProgress = ({
  img,
  label,
  progress,
  sublabel,
  styles,
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex h-[129px] w-[263px] gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg ${styles}`}
    >
      <img
        src={img}
        alt="Image Profile trip"
        className="aspect-square h-12 w-12"
        loading="lazy"
      />
      <div className="flex flex-col justify-between gap-2">
        <article className="flex flex-col gap-1">
          <h4 className="text-text-color text-sm">{label}</h4>
          <h5 className="text-darkblue text-lg">{sublabel}</h5>
        </article>
        <div className="flex flex-col gap-2">
          <div className="text-sm">
            <span className="text-light-purple">{progress}%</span>{' '}
            {t('completed')}
          </div>
          <div className="h-1 w-full rounded-full bg-gray-100">
            <div
              className="bg-light-purple h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
