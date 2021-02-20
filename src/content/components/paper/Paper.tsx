import Button from "../button/Button";
import Typography from "../typography/Typography";
import { Props } from "./Props";

const Paper = ({ children, title, className }: Props) => {
  return (
    <div className={`paper ${className}`}>
      <Typography
        className="paper__title"
        tag="h3"
        title="quartenary"
        variant="title"
      >
        {title}
      </Typography>
      <Typography className="paper__text" tag="p" para="body2" variant="para">
        {children}
      </Typography>
      <Button className="paper__button" size="sm" variant="outline">
        learn more
      </Button>
    </div>
  );
};

export default Paper;
