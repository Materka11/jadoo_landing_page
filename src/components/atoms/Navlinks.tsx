export interface ILink {
  label: string;
  url: string;
}

export interface IProps {
  label: string;
  links: ILink[];
}

export const Navlinks = ({ label, links }: IProps) => {
  return (
    <section className="flex max-w-fit flex-col gap-8">
      <h4 className="text-darkblue text-md font-bold first-letter:uppercase lg:text-xl">
        {label}
      </h4>
      <ul className="flex flex-col gap-1 text-sm text-gray-600 lg:text-lg">
        {links?.map((link) => (
          <li key={link?.label}>
            <a href={link?.url}>{link?.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
