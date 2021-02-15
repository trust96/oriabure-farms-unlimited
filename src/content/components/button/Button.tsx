import { Props } from "./Props";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  fullwidth,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn--${variant} ${className} btn--${size} ${
        fullwidth && "fullwidth"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
