import { ChangeEvent } from 'react';
import { handleChangeLanguage } from '../../config/i18n';

export interface IProps {
  languages: string[];
}

export const LanguageSelector = ({ languages }: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChangeLanguage(event).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Failed to change language:', error);
    });
  };

  return (
    <select
      onChange={handleChange}
      className="font-opensans lg:text-midnight cursor-pointer py-1 font-medium text-white focus:outline-none lg:px-2"
    >
      {languages?.map((lng) => (
        <option key={lng} value={lng} className="text-midnight">
          {lng}
        </option>
      ))}
    </select>
  );
};
