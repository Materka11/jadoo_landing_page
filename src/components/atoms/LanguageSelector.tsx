import { handleChangeLanguage } from '../../config/i18n';

export interface IProps {
  languages: string[];
}

export const LanguageSelector = ({ languages }: IProps) => {
  return (
    <select
      onChange={handleChangeLanguage}
      className="font-opensans text-midnight cursor-pointer px-2 py-1 font-medium focus:outline-none"
    >
      {languages?.map((lng) => (
        <option key={lng} value={lng}>
          {lng}
        </option>
      ))}
    </select>
  );
};
