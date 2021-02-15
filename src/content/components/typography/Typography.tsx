import { Props } from "./Props";

const Typography = ({
  tag,
  children,
  className,
  para,
  title,
  variant,
  color,
}: Props) => {
  const Tag = `${tag}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "i";
  return (
    <Tag
      className={`title--${title} para--${para} ${variant} ${className} text--${color}`}
    >
      {children}
    </Tag>
  );
};

export default Typography;
