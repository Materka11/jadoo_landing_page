export const convertDaysToDay = (day: string, t: (key: string) => string) => {
  return day === '1' ? t('trip_day') : t('trip_days');
};
