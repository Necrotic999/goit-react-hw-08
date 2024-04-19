import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = ({ buildLinkClass }) => {
  return (
    <div className={css.link_wrapper}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
