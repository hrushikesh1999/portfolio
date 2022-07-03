import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import "./header.css";

type HeaderProps = {
  title: string;
  icon: IconProp;
};

const Header = ({ title, icon }: HeaderProps) => {
  return (
    <div className="header">
      <Typography variant="h4" color="primary.dark" className="header-title">
        {title}
        <span className="header-icon">
          <FontAwesomeIcon icon={icon} size="xs" />
        </span>
      </Typography>
    </div>
  );
};

export default Header;
