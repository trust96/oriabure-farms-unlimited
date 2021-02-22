import React, { ReactElement } from "react";
import Typography from "../typography/Typography";

interface Props {
  children: React.ReactNode;
  src: string;
  className?: string;
  title: string;
  subtitle: string;
}

const Card = ({
  className,
  src,
  children,
  subtitle,
  title,
}: Props): ReactElement => {
  return (
    <div className={`card ${className}`}>
      <div className="card__image">
        <img
          className="img-fluid rounded-circle"
          src={`/images/${src}`}
          alt=""
        />
      </div>
      <div className="card__content">
        <Typography
          className="card__title"
          tag="h3"
          variant="title"
          title="quartenary"
        >
          {title}
        </Typography>
        <Typography
          className="card__subtitle"
          tag="h3"
          variant="title"
          title="quartenary"
          color="subtle"
        >
          {subtitle}
        </Typography>
        <Typography className="card__body" tag="p" variant="para" para="body1">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
