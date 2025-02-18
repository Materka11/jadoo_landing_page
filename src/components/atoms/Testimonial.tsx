export interface ITestimonial {
  avatar: string;
  content: string;
  name: string;
  subname: string;
  className?: string;
}

export const Testimonial = ({
  avatar,
  content,
  name,
  subname,
  className,
}: ITestimonial) => {
  return (
    <div
      className={`text-text-color relative flex h-full max-w-[504px] flex-col justify-between gap-7 rounded-xl bg-white px-8 py-7 lg:h-[245px] ${className}`}
    >
      <img
        src={avatar}
        alt="avatar"
        className="absolute top-0 left-0 aspect-square h-16 w-16 -translate-1/2 rounded-full"
        loading="lazy"
      />
      <p className="leading-8">{content}</p>
      <article className="flex flex-col gap-1">
        <h4 className="text-lg font-[600]">{name}</h4>
        <h5 className="text-sm">{subname}</h5>
      </article>
    </div>
  );
};
