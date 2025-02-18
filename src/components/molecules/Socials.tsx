import { useTranslation } from 'react-i18next';
import { AppStore, IAppStore } from '../atoms/AppStore';
import { ISocial, SocialIcon } from '../atoms/SocialIcon';

export interface IProps {
  socials: ISocial[];
  appStories: IAppStore[];
}

export const Socials = ({ socials, appStories }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-6">
        {socials?.map((social) => (
          <SocialIcon
            key={social?.link}
            link={social?.link}
            Icon={social?.Icon}
            isColor={social?.isColor}
          />
        ))}
      </section>
      <h4 className="mt-2 text-base text-gray-600 lg:text-xl">
        {t('discover_app')}
      </h4>
      <section className="flex gap-2">
        {appStories?.map((appStory) => (
          <AppStore key={appStory.sublabel} {...appStory} />
        ))}
      </section>
    </div>
  );
};
