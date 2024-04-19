import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import { selectEmail } from "../../redux/auth/authSlice";
import css from "./UserMenu.module.css";

const UserMenu = ({ buildLinkClass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);
  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }
  return (
    <>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      <p className={css.header_text}>Welcome, {userEmail}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
