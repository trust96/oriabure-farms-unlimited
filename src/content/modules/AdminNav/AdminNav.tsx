import React, { ReactElement } from "react";
import { BiUser, BiNote } from "react-icons/bi";
interface Props {
  manage: () => void;
  report: () => void;
}

const AdminNav = ({ manage, report }: Props): ReactElement => {
  return (
    <nav className="admin_nav">
      <button onClick={manage} className="admin_nav__button">
        <BiUser className="admin_nav__icon" />
      </button>
      <button onClick={report} className="admin_nav__button">
        <BiNote className="admin_nav__icon" />
      </button>
    </nav>
  );
};

export default AdminNav;
