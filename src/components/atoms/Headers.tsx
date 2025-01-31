export interface IProps {
  label: string;
  sublabel: string;
  labelStyles: string;
  sublabelStyles: string;
  sectionStyles?: string;
}

export const Headers = ({
  label,
  sublabel,
  labelStyles,
  sublabelStyles,
  sectionStyles,
}: IProps) => {
  return (
    <section className={`flex flex-col ${sectionStyles || ''}`}>
      <h2 className={labelStyles}>{label}</h2>
      <h3 className={sublabelStyles}>{sublabel}</h3>
    </section>
  );
};
