import { ElementType } from 'react';
import { BuildingIcon } from './BuildingIcon';
import { HeartIcon } from './HeartIcon';

export interface IProps {
  img: string;
  title: string;
  description: string;
  options: ElementType[];
  peopleNum: number;
  styles?: string;
}

export const TripPost = ({
  img,
  description,
  options,
  peopleNum,
  title,
  styles,
}: IProps) => {
  return (
    <div
      className={`text-text-color relative flex h-[400px] max-w-[370px] flex-col justify-between gap-5 rounded-3xl bg-white px-6 py-5 shadow-lg ${styles}`}
    >
      <img src={img} alt="Image of the post" className="rounded-3xl" />
      <article className="flex flex-col gap-2">
        <h3 className="text-darkblue text-lg">{title}</h3>
        <p>{description}</p>
      </article>
      <div className="flex gap-4">
        {options?.map((Icon) => (
          <button>
            <Icon className="h-8 w-8" />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BuildingIcon className="h-4 w-4" />
          <p>{peopleNum} people going</p>
        </div>
        <HeartIcon className="h-5 w-5" />
      </div>
    </div>
  );
};
