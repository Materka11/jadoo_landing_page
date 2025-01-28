export interface ILinks {
  label: string;
  url: string;
}

export interface IProps {
  label: string;
  links: ILinks[];
}

export const Navlinks = ({ label, links }: IProps) => {
  return (
    <section className="flex max-w-[110px] flex-col gap-8">
      <h4 className="text-darkblue text-xl font-bold">{label}</h4>
      <ul className="text-softgray flex flex-col gap-1 text-lg">
        {links?.map((link) => (
          <li key={link?.label}>
            <a href={link?.url}>{link?.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
